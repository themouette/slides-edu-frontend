# Promises

---

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

##

[Promise specs](https://github.com/domenic/promises-unwrapping)
[HTML5 Rocks about promises](http://www.html5rocks.com/en/tutorials/es6/promises/)
[Promise pollyfill](https://github.com/jakearchibald/ES6-Promises)
