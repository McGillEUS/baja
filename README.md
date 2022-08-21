# Baja Site

## Project Setup

Make sure `npm` and `node.js` are up-to-date, then install packages

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

The site can be viewed at `localhost:3000`

### Compile and Minify for Production

```sh
npm run build
```

---

## Project Structure

This is a vue project with vue-router following the standard file structure. When adding views, make sure to add them to the router's `index.js`. Bootstrap is also being used with variable overrides in `assets/styles/_custom.scss`.

## Automation

The scripts in the automation folder should make it simple to update the content for the people and cars on the team page.  

To update the people:
1. Save as the excel file as `people.xls` in the automation folder (the name can be changed in `people.py` but the extension .xls must stay the same). Note that everyone will appear in the site in the same order as in the file.
2. Run the python script using `python people.py > people.json`. This will create/update the people.json file in the automation folder. The UI will import that file and generate the associated code.
3. Add each person's image to the folder `assets/images/people` with the format `Firstname.jpg`. The UI will automatically import them.

Any changes made directly to the `people.json` will be displayed immediately, but if the `people.xls` file is modified and the python script is re-run, then those changes may be overwritten.  

To update the cars, add the car info to the `cars.json` file in the automation folder and add the corresponding image to the folder `assets/images/cars` with the format `year.jpg` (ex: MB22.jpg). In the json file, add an object for the car like this: `{ "year": "MB18", "name": "Tilly" }`. If it doesn't have a name, just use an empty string (so instead of "Tilly", it would be "").