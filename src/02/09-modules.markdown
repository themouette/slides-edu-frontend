
# Modules

---

## Simple modules

Use <accronym title="Immediately-Invoked Function Expression">IIFE</accronym> to isolate context

``` javascript
var myModule = (function (window, undefined) {
    var privateVariable;

    function foo () {
    }
    function bar () {
    }

    return {
        foo: foo,
        bar: bar
    };
})(window);
```

More about <accronym title="Immediately-Invoked Function Expression">IIFE</accronym>
on [Cowboy's blog](http://benalman.com/news/2010/11/immediately-invoked-function-expression/)

---

## AMD

Asynchronous Module Definition relies on `define`.

``` javascript
define([
    'jquery',
    'app/model/user'
], function ($, User) {
    var user = new User();

    /* ... */

    return something;
});
```

> [curljs](http://davidwalsh.name/curljs) and [requirejs](http://requirejs.org/)
> are amd loader.
>
> [amdclean](https://github.com/gfranko/amdclean) removes extra `define`

---

## CommonJS

#### aka `exports` and `require`

[browserify](http://browserify.org/) allow to use [nodejs](http://nodejs.org/)
dependency model.

``` javascript
module.exports = (function () {

    var User = require(__dirname + '/model/user');

    var u = new User();

    /* ... */

    return something;
})();
```

---

<!-- .slide: id="es6-modules" -->

## ES6 modules

Import module as a variable

``` javascript
import "jquery" as jQuery;
```

Import one part of a module

``` javascript
import Point from "math";
```

Import multiple parts of a module

``` javascript
import { sqrt, Point } from "math";
```

---

## ES6 import module

Export an object as the module

``` javascript
export = jQuery;
```

Export an object as a module property

``` javascript
export Point;
```

Export multiple objects as module properties

``` javascript
export { sqrt, Point };
```

---

## Play with ES6 modules now

[es6 transpiler](http://square.github.io/es6-module-transpiler/)

[Traceur compiler](https://github.com/google/traceur-compiler)
