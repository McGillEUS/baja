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