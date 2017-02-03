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
            app: 'dist/tsc-out/app',

            // angular bundles
            '@angular/core'     : 'npm:@angular/core/bundles/core.umd.min.js',
            '@angular/common'   : 'npm:@angular/common/bundles/common.umd.min.js',
            '@angular/compiler' : 'npm:@angular/compiler/bundles/compiler.umd.min.js',
            '@angular/http'     : 'npm:@angular/http/bundles/http.umd.min.js',
            '@angular/router'   : 'npm:@angular/router/bundles/router.umd.min.js',
            '@angular/forms'    : 'npm:@angular/forms/bundles/forms.umd.min.js',
            '@angular/platform-browser'        : 'npm:@angular/platform-browser/bundles/platform-browser.umd.min.js',
            '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.min.js',

            // other libraries
            'rxjs': 'npm:rxjs',
            'angular-in-memory-web-api': 'npm:angular-in-memory-web-api',
        },

        packages: {
            app: {
                main: './main.js',
                defaultExtension: 'js'
            },
            rxjs: {
                defaultExtension: 'js'
            },
            'angular-in-memory-web-api': {
                main: './index.js',
                defaultExtension: 'js'
            }
        }
    });
})(this);
