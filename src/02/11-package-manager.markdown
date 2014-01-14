# NPM

<!-- .slide: data-background-image="img/02/npm.png" data-background-size="auto 30%" data-background-position="center 10%" class="hide-title" -->

Manage server dependencies

[npmjs.org](https://npmjs.org/) <!-- .element: class="icontext link" -->

---

## package.json

```
{
 "name" : "foo"
 , "version" : "1.2.3"
 , "description" : "A packaged foo fooer for fooing foos"
 , "main" : "foo.js"
 , "man" : [ "./man/foo.1", "./man/bar.1" ]
}
```

[package.json reference](https://npmjs.org/doc/files/package.json.html) <!-- .element: class="alert doc" -->

---

## Commands

``` bash
$ npm init

$ npm install

$ npm install --save-dev grunt@4.0.3

$ npm install -g grunt-cli

$ npm install --save express
```

[NPM documentation](https://npmjs.org/doc/) <!-- .element: class="icontext link" -->

---
---

<!-- .slide: data-background-image="img/02/bower-logo.png" data-background-size="auto 70%" data-background-position="left center" -->

# Bower

Manage frontend assets

[bower.io](http://bower.io/) <!-- .element: class="icontext link" -->

---

<!-- .slide: data-background-image="img/02/bower-logo.png" data-background-size="auto 70%" data-background-position="left center" -->

## bower.json

```
{
  "name": "my-project",
  "version": "1.0.0",
  "main": "path/to/main.css",
  "ignore": [ ".jshintrc", "**/*.txt" ],
  "dependencies": {
    "<name>": "<version>",
    "<name>": "<folder>",
    "<name>": "<package>"
  },
  "devDependencies": {
    "<test-framework-name>": "<version>"
  }
}
```

---

<!-- .slide: data-background-image="img/02/bower-logo.png" data-background-size="auto 70%" data-background-position="left center" -->

## Commands

``` bash
$ bower init

$ bower install

$ bower install --save-dev requirejs#2.x

$ bower install --save jquery
```

---
---

<!-- .slide: data-background-image="img/02/yo-logo.png" data-background-size="auto 70%" data-background-position="right center" -->

# Yo!

Application scaffolding

[Yo! on github](https://github.com/yeoman/yo) <!-- .element: class="icontext link" -->
and
[yeoman](http://yeoman.io) <!-- .element: class="icontext link" -->

---
---

<!-- .slide: data-background-image="img/02/grunt-logo.png" data-background-size="auto 70%" data-background-position="left center" -->

# Grunt

Javascript task runner, based on JSON configuration.

[gruntjs.com](http://gruntjs.com/) <!-- .element: class="icontext doc" -->

---

<!-- .slide: data-background-image="img/02/grunt-logo.png" data-background-size="auto 70%" data-background-position="left center" -->

## Resources

* [Getting started](http://gruntjs.com/getting-started)
* [Your first GruntJS plugin](http://javascriptplayground.com/blog/2014/01/creating-your-first-grunt-plugin/)

---

## Glup

[gulpjs.com](http://gulpjs.com/) is a stream based build system, favoring code over configuration.
