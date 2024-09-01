## Installation

1. Install project dependencies with `npm install`.
2. Run `npm run deploy` to initialize `gh-pages`. This is a one time action. Further deployments will be initiated by GitHub Actions on every push to `main`.

## Usage

1. Start local development server with `npm start`.
2. Update contents of `src` folder to fit your needs. This item is explained [below](#update-contents).
3. Commit and push your changes.
4. GitHub Actions will automatically build the latest version and deploy it to GitHub Pages.

### Update contents

The project uses [HandlebarsJS](https://github.com/wycats/handlebars.js/) as a template engine.

The main HTML template is located in [src/templates/index.html](src/templates/index.html). Metadata for the template could be found in [src/metadata/metadata.js](src/metadata/metadata.js).

Don't forget to update [src/assets/favicon.ico](src/assets/favicon.ico). You can generate a new favicon out of your photo with [icoconvert.com](http://icoconvert.com/).
