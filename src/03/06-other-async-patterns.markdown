Other Patterns
==============

---

Callback Queue
--------------

``` javascript
async.waterfall([
        function action1(done) {
            done(null, 12);
        },
        function action2(action1Result, done) {
            done(null, 12, 13);
        }
    ], function (err, res1, res2) {
        if (err) return alert(err.message);
        alert(res1 + res2);
    });
```

> For instance [async](https://github.com/caolan/async)

---

Generator + Promises
--------------------

Combine ES6 Generators and ES6 Promises to make async code look like synchronous

<a class="icontext link" href="https://www.promisejs.org/generators/">Learn More</a>
