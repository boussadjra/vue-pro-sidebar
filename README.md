# Vue Pro Sidebar

A responsive sidebar template version of the [HTML pro side bar](https://github.com/azouaoui-med/pro-sidebar-template)
which has a configuration of files structure and Vue ecosystem including Vuex and Vue-router (with [code splitting feature](https://webpack.js.org/guides/code-splitting-async/))
it's developed using Vue-cli 3, it's serves as starter and saves your time when you launch a new project.

Original versions made by [Azouaoui Mohamed](https://github.com/azouaoui-med/)
Check [HTML version](https://github.com/azouaoui-med/pro-sidebar-template)
And [Angular version](https://github.com/azouaoui-med/angular-pro-sidebar)

And [React version](https://github.com/bRIMOs/react-pro-sidebar/) developed by [bRIMOs](https://github.com/bRIMOs/)

## Screenshots

![Vue Pro Sidebar 1](https://i.imgur.com/sTXOnj2.png)

![Vue Pro Sidebar 2](https://i.imgur.com/G1QaTSy.png)

## Demo

[Live Demo](http://boussadjra.github.io/vue-pro-sidebar)

## Quick start

Clone the project and go to its root and run

```
npm install

npm run serve
```

Navigate to `http://127.0.0.1:8080/`.

## Resources

This app doesn't use any CSS framework or assets provider.

## Directory structure

```js
-src
 |_@use // it contains composition functions (from composition api plugin)
 |_assets  // it contains images, fonts ...
 |_components // reusable components like buttons, dropdowns ...
 |_directives // where you define your custom directives
 |_layout    // the page layout which contains header,sidebar and main content
 |_routes    // where you define the router and the different navigation routes
 |_store     // it contains the global Vuex store
 |_styles   // it contains the CSS and SCSS files
 |_utils    // where you define the global function helpers
 |_views    // the pages and routes which should be shown in  the main content
 |_app.scss  // it contains common and global style
 |_app.vue   // the root component
 |_main.js  // it defines the vue instance and uses the different plugin 

```

## License

This code is released under the [MIT]() license.
