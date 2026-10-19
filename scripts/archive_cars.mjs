#!/usr/bin/env node
// Archive the current Gallery page as a car page under "Our Cars"
// for example:
//   node scripts/archive-car.mjs MB26 "Nicky" --season "2025–2026" \
//        --description-file nicky.txt [--force]
//
// What it does:
//   1. Copies public/images/gallery  ->  public/images/cars-archive/<year>
//      (without the comparison view and 360 view)
//   2. Counts the photos in each folder and adds an entry to
//      src/assets/automation/car-galleries.json
//   3. Adds the car to src/assets/automation/cars.json (Team page + Our Cars
//      menu) if it isn't there yet, and copies its header photo to
//      public/images/cars/<year>.jpg (the dropdown preview) if missing.
//
// run it from the repo root + note that it doesn't delete anything from public/images/gallery.

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const galleryDir = path.join(root, "public/images/gallery");
const archiveRoot = path.join(root, "public/images/cars-archive");
const carsImgDir = path.join(root, "public/images/cars");
const galleriesJson = path.join(root, "src/assets/automation/car-galleries.json");
const carsJson = path.join(root, "src/assets/automation/cars.json");

const fail = (msg) => {
  console.error(`\n✖ ${msg}\n`);
  process.exit(1);
};

const args = process.argv.slice(2);
const flags = {};
const positional = [];
for (let i = 0; i < args.length; i++) {
  if (args[i] === "--force") flags.force = true;
  else if (args[i].startsWith("--")) flags[args[i].slice(2)] = args[++i];
  else positional.push(args[i]);
}
const [year, name = ""] = positional;
if (!year || !/^MB\d+$/.test(year))
  fail('Usage: node scripts/archive-car.mjs MB26 "Nicky" [--season "2025–2026"] [--description-file file.txt] [--force]');
if (!fs.existsSync(galleryDir)) fail(`Can't find ${galleryDir}`);

let description = flags.description ?? "";
if (flags["description-file"])
  description = fs.readFileSync(flags["description-file"], "utf8").trim().replace(/\s+/g, " ");
if (!description) console.warn("⚠ No --description / --description-file given; the paragraph will be empty.");

const dest = path.join(archiveRoot, year);
if (fs.existsSync(dest) && !flags.force)
  fail(`${dest} already exists. Use --force to overwrite.`);

const files = (dir, ext) =>
  fs.existsSync(dir)
    ? fs.readdirSync(dir).filter((f) => new RegExp(`^\\d+\\.${ext}$`, "i").test(f))
    : [];

// count "1.jpg".."n.jpg"
const countSet = (dir, ext) => {
  const found = files(dir, ext);
  const nums = found.map((f) => parseInt(f, 10)).sort((a, b) => a - b);
  nums.forEach((n, i) => {
    if (n !== i + 1)
      fail(`${dir} must be numbered 1.${ext} … ${nums.length}.${ext} with no gaps (found ${nums.join(", ")}).`);
  });
  return nums.length;
};

const columnCounts = (parent) => {
  const out = [];
  for (let n = 1; fs.existsSync(path.join(parent, `column-${n}-pics`)); n++)
    out.push(countSet(path.join(parent, `column-${n}-pics`), "jpg"));
  return out;
};

// this part copies and builds the entry
if (flags.force) fs.rmSync(dest, { recursive: true, force: true });
fs.mkdirSync(archiveRoot, { recursive: true });

const skip = ["360-view", "comparison-view", "Front.png", "Front-cad.png"].map((n) => path.join(galleryDir, n));
fs.cpSync(galleryDir, dest, { recursive: true, filter: (src) => !skip.includes(src) });

const entry = { year, name };
if (flags.season) entry.season = flags.season;
entry.description = description;
entry.columns = columnCounts(path.join(dest, "general"));
if (entry.columns.length > 3) fail("The page layout supports at most 3 general columns.");

if (!fs.existsSync(path.join(dest, "MB-header.jpg")))
  console.warn("⚠ MB-header.jpg is missing from the gallery folder; the header photo will be broken.");

//car_galleries.json
const gData = JSON.parse(fs.readFileSync(galleriesJson, "utf8"));
gData.galleries = gData.galleries.filter((g) => g.year !== year);
gData.galleries.push(entry);
fs.writeFileSync(galleriesJson, JSON.stringify(gData, null, 2) + "\n");

//cars.json + preview picture
const cData = JSON.parse(fs.readFileSync(carsJson, "utf8"));
if (!cData.cars.some((c) => c.year === year)) {
  cData.cars.unshift({ year, name });
  fs.writeFileSync(carsJson, JSON.stringify(cData, null, 2) + "\n");
  console.log(`+ Added ${year} to cars.json`);
}
const preview = path.join(carsImgDir, `${year}.jpg`);
const header = path.join(dest, "MB-header.jpg");
if (!fs.existsSync(preview) && fs.existsSync(header)) {
  fs.copyFileSync(header, preview);
  console.log(`+ Copied header photo to public/images/cars/${year}.jpg (dropdown preview — swap for a nicer one if you like)`);
}

console.log(`\n✔ Archived ${year}${name ? ` "${name}"` : ""} -> public/images/cars-archive/${year}`);
console.log(JSON.stringify(entry, null, 2));
console.log(`
Next:
  1. Check it:  npm run dev   (Our Cars -> ${year})
  2. Start the new season: replace the photos in public/images/gallery and
     update the car name / paragraph in src/views/GalleryView.vue.
  3. Commit public/images/cars-archive/${year}, the two json files and the preview image.
`);