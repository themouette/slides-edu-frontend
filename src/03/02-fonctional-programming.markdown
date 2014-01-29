Functional Programming
================

---

Definition
----------

* Dr Yannick Loiseau [on Functional programming](http://yloiseau.net/articles/functionnal/)
* [Definition on Stack Overflow](http://stackoverflow.com/a/8357604)
* [Refactor to functional](http://linusnorton.github.io/posts/refactor-to-functional/) by Linus Norton

---

Pure function
--------------

Pure functions have the following attributes:

* The only observable output is the return value.
* The only output dependency is the arguments.
* Arguments are fully determined **before** any output is generated.

---

Pure function
-----------

* They always return the same result given the same input
* They have no side effects

<!-- .element: class="fragment alert info" --> Takes clear input, gives clear output: that's it

---

Array
---

---

<!-- .slide: class="no-transform" -->

Array.forEach(callback[, thisArg]);
-------

<br />
<pre><code class="javascript runnable" data-runnable-output="jsonalert">[1, 2, 3]
  .forEach(function (value, key) {
    return value + key;
  });</code></pre>

<p class="alert">
<span class="icontext doc">[Reference on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)</span>
</p>


---

<!-- .slide: class="no-transform" -->

Array.map(callback[, thisArg])
---

<br />
<pre><code class="javascript runnable" data-runnable-output="jsonalert">[1, 2, 3]
  .map(function (value, key) {
    return value + key;
  });</code></pre>

<p class="alert">
<span class="icontext doc">[Reference on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)</span>
</p>

---

<!-- .slide: class="no-transform" -->

Array.reduce(callback,[initialValue])
---

<br />
<pre><code class="javascript runnable" data-runnable-output="jsonalert">[1, 2, 3]
  .reduce(function add(accumulator, value, index) {
    return accumulator + value;
  }, 0);</code></pre>

<p class="alert">
<span class="icontext doc">[Reference on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)</span>
</p>

---

<!-- .slide: class="no-transform" -->

Array.filter(callback[, thisArg])
------

<br />
<pre><code class="javascript runnable" data-runnable-output="jsonalert">[1, 2, 3]
  .filter(function odd(value) {
    return value % 2;
  });</code></pre>

<p class="alert">
<span class="icontext doc">[Reference on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)</span>
</p>


---

Useful patterns
----

---

Partial Application
---

<pre><code class="javascript runnable" data-runnable-output="jsonalert">function greet(name, message) {
    return [message, " ", name, '!'].join("");
}
var hello = function (name) {
    return greet(name, "Hello");
}

hello("Foo");
</code></pre>


---

Compose
---

<pre><code class="javascript">function userToName(user) {
    return user.name || "John Doe";
}

var helloUser = compose(greet, userToName);

// same as
function (user) {
    return greet( userToName( user ) );
}
</code></pre>


---

Resources:

* http://lodash.com/
* http://underscorejs.org/

