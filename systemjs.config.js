/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
  System.config({
    paths: {
      // paths serve as alias
      'npm:': 'node_modules/'
    },
    // map tells the System loader where to look for things
    map: {
      // our app is within the app folder
      app: 'app',

      // angular bundles
      '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
      '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
      '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
      '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
      '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
      '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
      '@angular/upgrade': 'npm:@angular/upgrade/bundles/upgrade.umd.js',

      // other libraries
      'rxjs': 'npm:rxjs',

      'angular2-jwt': 'npm:angular2-jwt/angular2-jwt.js',
      'js-base64': 'npm:js-base64/base64.js',
      'buffer': '@empty',
      'ng2-toasty': 'npm:ng2-toasty',
      // 'ts-metadata-helper': 'npm:ts-metadata-helper',
      // 'angular2-dynamic-component': 'npm:angular2-dynamic-component',
      'angular2-busy': 'npm:angular2-busy',
      'moment': 'npm:moment'
    },
    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
      app: {
        main: './main.js',
        defaultExtension: 'js'
      },
      rxjs: {
        defaultExtension: 'js'
      },
      'angular2-jwt': {
        defaultExtension: 'js'
      },
      'ng2-toasty': {
        main: './index.js',
        defaultExtension: 'js'
      },
      // 'ts-metadata-helper': {
      //   main: './index.js',
      //   defaultExtension: 'js'
      // },
      // 'angular2-dynamic-component': {
      //   main: './index.js',
      //   defaultExtension: 'js'
      // },
      'angular2-busy': {
        main: './index.js',
        defaultExtension: 'js'
      },
      'moment': {
        main: './moment.js',
        defaultExtension: 'js'
      }
    }
  });
})(this);
