## Prerequisites

The generated project has dependencies that require **Node 4.x.x and NPM 3.x.x**.
 

## Installation

Clone/Unzip project files and install all deps with *npm*.

Make sure you have *angular-cli* installed globally (`npm install -g angular-cli@latest`)
More info on: https://cli.angular.io/


```
cd my-dream-project
npm install
```

HINT: To update your npm, simly run npm install -g npm 

## App structure

```
.
|-- src
|   |-- app
|   |   |-- +feature-module-1        # by convension async modules are prefixed with + sign            
|   |       |-- feature-module-1.component.html
|   |       |-- feature-module-1.component.ts
|   |       |-- feature-module-1.module.ts
|   |       |-- feature-module-1.routing.ts
|   |   |-- +feature-module-2
|   |   ...
|   |   |-- shared                    # folder with common directives, components, services, pipes 
|   |       |-- api                   
|   |       |-- chat
|   |       |-- forms
|   |       |-- graphs
|   |       ...
|   |       |-- smartadmin.config.ts  # smartadmin setup file
|   |       |-- smartadmin.module.ts  # shared module used for reexport common functionality
|   |   ...    
|   |   |-- app.componet.ts
|   |   |-- app.module.ts       # app root module
|   |   |-- app.routing.ts      # app root routing  
|   |       
|   |-- assets           # static resources folder
|   |   |-- css   
|   |   |-- fonts   
|   |   ...   
|   |-- envionments      # dev/prod env files
|   |   ...   
|   |-- 404.html    
|   |-- index.html   
|   |-- main.ts          # app entry point 
|   |-- polyfills.ts     
|   |-- styles.css       # here you can add your own styles
|   ...
|
...
|-- angular-cli.json     # angular-cli config
|-- karma.conf.js        # unit test conf
|-- package.json
|-- proctator.conf.js    # e2e test conf
...

```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.


## Smartadmin Angular 2 templates

Smartadmin will be supplied with 3 templates: 
* *full* - whole demo application
* *blank* - app ith one page but all plugins included
* *lite* - one page + only layout stuff. Good starting point for creating smartadmin app with no extra dependencies (like jquery) 

## Some useful info

* Switching app root-layouts according to route (e.g. different layout for login/register pages) 
* Lazy loading everywhere - routing and plugins 
* Google Map - async map initializer 
* Image editor - Angular 2 application with Redux data flow 
* CK Editor - loading scripts from cdn


## Webpack

Under the hood the project is maintained via webpack. But this time you won't be messing 
with any kind of builder config - everything is configured already and works out of the box.

If you would like to switch from *css* to *SASS*/*LESS* or add some custom entry point, then you have to update your `angular-cli.json` with a single word. 
 
 And in your dist folder you'll get the 
 * smallest possible  (_tree-shaking_ - excluding unused exports from bundles),
 * very well optimized-chunked-minimized-uglified-gziped, with all assets processed 
  deploy ready app-build
  
## Angular-cli
Visit [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md) for usage hints. Also checkout *Development Hints for hacking on angular-cli* section for how to always get latest versions of angular-cli


## Testing
App is configured for running end-to-end (via [Protractor](http://www.protractortest.org/)) and unit (via [Karma](https://karma-runner.github.io)) tests

Run `ng e2e` to execute the end-to-end tests . 
Run `ng test` to execute the unit tests .
Before running the tests make sure you are serving the app via `ng serve`.


## Further help
To get more help on the `angular-cli` use `ng --help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
