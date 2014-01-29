# Promises

---


## Promise?

* [Promises](http://wiki.commonjs.org/wiki/Promises) are CommonJS spec (/A, /B, /C, /D) ;
* [Promises](http://www.html5rocks.com/en/tutorials/es6/promises/#toc-api) are ES6spec ;
* Functional approach for asynchronous ;
* A single API for every asynchronous processes ;
* Avoid pyramid of doom.

---

## Easy async

```
var user = getUser();
user
    .then(hydrateFriends)
    .then(orderByTopFriend)
    .then(askUserToValidate)
    .then(saveBFF);
```

---

## ES6

```
var jsonPromise = new Promise(function(resolve, reject) {
    // JSON.parse throws an error if you feed it some
    // invalid JSON, so this implicitly rejects:
    resolve(JSON.parse("This ain't JSON"));
});

jsonPromise.then(function(data) {
    // This never happens:
    console.log("It worked!", data);
}).catch(function(err) {
    // Instead, this happens:
    console.log("It failed!", err);
});
```

---

<!-- .slide: class="no-transform" -->

Promise.all
-----------

Make a promise that fulfills when every item in the array fulfills.

``` javascript
var loading = document.getElementById('loading')
loading.className = "visible";

var p = Promise.all([users, events, friends]);

p.then(function (users, events, friends) {
    loading.className = "hidden";
});
```

---

## Resources

* [Promise specs](https://github.com/domenic/promises-unwrapping)
* [HTML5 Rocks about promises](http://www.html5rocks.com/en/tutorials/es6/promises/)
* [Promise pollyfill](https://github.com/jakearchibald/ES6-Promises)
