# gae-web-boilerplate (Front-end)
A simple and boilerplate to build web application (vanilla + typescript) and deploy it to Google App Engine.

## Pre-requisite
* [Node](https://nodejs.org/en/) 14.19.1 / [npm](https://www.npmjs.com/) 6.14.16
    * Recommend installing with [nvm](https://github.com/creationix/nvm)
* [Webpack] 5.70.0 (https://webpack.js.org/)

## Stacks
* Nunjucks
* Typescript
* SASS for CSS pre-processor
* Webpack 5
* BrowserSync

## Code structure
* `data` folder
    this folder contains nunjuck templating data.
    **To add new data for a new page:**
    1. you can simply create a new JSON file with the page name i.e. `about.json`.
    ```
* `src` folder
    - **to create new page:**
      1. go to `src/pages`, create new page folder. i.e. `about`
      2. in `src/pages/about` folder, create new `page.about.njk`. with the following content:
      ```
      {% extends "base.njk" %}

      {% block meta_tag %}

      {% endblock %}

      {% block third_party_styles %}
      {% endblock %}

      {% block page_styles %}
        <link rel="stylesheet" href="css/404.css">
      {% endblock %}

      {% block header %}
      {% endblock %}

      {% block main %}
      <div class="app-about">
        [content]
      </div>
      {% endblock %}

      {% block footer %}
      {% endblock %}

      {# additional component i.e snackbar + loader #}
      {% block additional_components %}
      {% endblock %}

      {% block third_party_scripts %}
      {% endblock third_party_scripts %}

      {% block page_scripts %}
      {# <script src="js/404.js"></script> #}
      {% endblock %}


      ```

      3. (OPTIONAL), create page's style + script in the same folder. i.e. `about.scss` and `about.ts`


      P.S: if there is no custom style/script needed, you can remove the page_styles + page_scripts block.


  - **Creating new component:**
      1. go to `src/components`, create new component folder. i.e. header
      2. in `src/components/header` folder, create new nunjucks template file called `header.njk` + `header.scss` (OPTIONAL)
      3. if there is component style, you might want to import it in `src/styles/index.scss`. otherwise, you can also import it in the respective page style file


```
.
+-- webpack-plugins
|   +-- html-cleanup.ts
|   +-- nunjucks-build.ts
|   +-- nunjucks-non-html-build.ts
|   +-- utils.ts
+-- src
|   +-- data
|       +-- global.json
|       +-- home.json
|       +-- robots.json
|       +-- sitemap.json
|   +-- components
|       +-- button
|           +-- button.njk
|           +-- button.scss
|       +-- any other components
|   +-- pages
|       +-- home
|           +-- index.njk
|           +-- home.scss
|           +-- home.ts
|       +-- 404
|           +-- index.njk
|           +-- 404.scss
|           +-- 404.ts (if needed)
|       +-- any other pages
|   +-- images
|       +-- any image assets
|   +-- svgs
|       +-- any svg assets
|   +-- robots-sitemap
|       +-- robots.txt.njk
|       +-- sitemap.xml.njk
|   +-- styles
|       +-- _layout.scss
|       +-- _utils.scss
|       +-- _typography.scss
|       +-- _common.scss
|       +-- _variables.scss
|   +-- base.njk
|   +-- base.ts
|   +-- base.scss
+-- tsconfig.json
+-- .eslintrc.json
+-- webpack.config.prod.ts
+-- webpack.config.ts

```

## Quickstart

### Dev
`npm run dev` and visit `http://localhost:3000`

### Build
`npm run build`
