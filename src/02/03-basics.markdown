Data type
=========

---

## Undefined

<pre><code class="javascript runnable" data-runnable-output="jsonalert">var foo;
typeof foo;
</code></pre>

---

## Null

<pre><code class="javascript runnable" data-runnable-output="jsonalert">var foo = null;
typeof foo;
</code></pre>

---

## Number

``` javascript
123     // integer

12.345  // fractional

12.3e4  // 'scientific' notation: 12.3 * 10^4
```

<!-- .element: class="icontext doc" --> [Number Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)

---

## Limitations

<ul>
<li>**64 bytes** total;</li>
<li>**1 byte** for sign;</li>
<li>**11 bytes** for dot position</li>
</ul>

<p class="alert info">**52 bytes** left for number itself.</p>

---

## Convertiong to numbers

<pre><code class="javascript runnable" data-runnable-output="alert">(123).toString(16); // 7b</code></pre>

<pre><code class="javascript runnable" data-runnable-output="alert">parseInt('123', 10); // 123</code></pre>
<pre class="fragment"><code class="javascript runnable" data-runnable-output="alert">parseInt('123'); // 123</code></pre>
<pre class="fragment"><code class="javascript runnable" data-runnable-output="alert">parseInt('7B', 16); // 123</code></pre>
<pre class="fragment"><code class="javascript runnable" data-runnable-output="alert">parseInt('7B'); // 7</code></pre>

<p class="alert warn fragment">Always use a radix.</p>

---

## NaN, Infinity, -Infinity


<div class="two-columns">
<pre><code class="javascript runnable" data-runnable-output="alert">12/0;  // Infinity</code></pre>
<pre><code class="javascript runnable" data-runnable-output="alert">-12/0; // -Infinity</code></pre>
</div>
<div class="two-columns">
<pre class="red"><code class="javascript runnable" data-runnable-output="alert">NaN === NaN; // false</code></pre>
<pre><code class="javascript runnable" data-runnable-output="alert">3/"a"; // NaN</code></pre>
</div>

<pre class="green"><code class="javascript runnable" data-runnable-output="alert">(-Number.MAX_VALUE) * 2 === Number.NEGATIVE_INFINITY;</code></pre>
<pre class="green"><code class="javascript runnable" data-runnable-output="alert">Number.isNaN(Number.NaN);</code></pre>

---

## String

``` javascript
"Patch my boat with chewing gum."
"This is the first line\nAnd this is the second"
"A newline character is written like \"\\n\"."
```

Concatenate using `+`

<pre><code class="javascript runnable" data-runnable-output="alert">"The cat" + " ate my" + " source code"</code></pre>

<!-- .element: class="icontext doc" --> [String Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

---

## Function

<pre><code class="javascript runnable" data-runnable-output="alert">function add(a, b) {
    return a + b;
}
add(1, 2);
</code></pre>

<p class="alert info">Functions are objects too.</p>

<pre><code class="javascript runnable" data-runnable-output="alert">var add = function (a, b) {
    return a + b;
}
add(1, 2);
</code></pre>

<!-- .element: class="icontext doc" --> [Function Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)

---

## Array

<accronym title="Java Script Object Notation">JSON</accronym> way:

<pre><code class="javascript runnable" data-runnable-output="alert">var a  = [1, 2], b;

a.push(3);
b = a.concat([4, 5]);
b.join(', ');
</code></pre>

[Array Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) <!-- .element: class="icontext doc" -->
and
[Array extra (since "1.6")](https://developer.mozilla.org/en-US/docs/Web/JavaScript/New_in_JavaScript/1.6#Array_extras) <!-- .element: class="icontext doc" -->

---

## Object

<accronym title="Java Script Object Notation">JSON</accronym> way:

``` javascript
var cat  = {colour: "grey", name: "Spot", size: 46};
```

Constructor way:

``` javascript
var zombie  = new Object();
```

<!-- .element: class="icontext doc" --> [Object Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)

---

## Accessing properties

``` javascript
var cat = {colour: "grey", name: "Spot", size: 46};

cat.colour; //grey

cat['name']; //Spot
```

**`toString()`** method

<pre><code class="javascript runnable" data-runnable-output="jsonalert">var cat = {colour: "grey", name: "Spot", size: 46};
cat.toString();
</code></pre>


---

## Setting properties

<pre><code class="javascript runnable">var cat = {colour: "grey", name: "Spot", size: 46};

cat.size = 47;
console.log(cat.size);

delete cat.size;
console.log(cat.size);
console.log(cat);
</code></pre>

<p class="alert info">Open your browser console to see examples in action.</p>

---

## RegExp

<pre><code class="javascript runnable" data-runnable-output="jsonalert">/^a\w+$/.test('abricot');</code></pre>
<pre><code class="javascript runnable" data-runnable-output="jsonalert">"peach".match(/(\w+)a(\w+)$/);</code></pre>
<pre><code class="javascript runnable" data-runnable-output="jsonalert">(/^a\w+$/i).test('Abricot');</code></pre>

<!-- .element: class="icontext doc" --> [RegExp reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp)

---

## Bonus: `typeof` and `instanceof`



---

## Bonus: equality

<div class="two-columns">
<pre class="green"><code class="javascript runnable" data-runnable-output="jsonalert">null == undefined</code></pre>
<pre class="red"><code class="javascript runnable" data-runnable-output="jsonalert">null === undefined</code></pre>

<pre class="green"><code class="javascript runnable" data-runnable-output="jsonalert">0 == false</code></pre>
<pre class="red"><code class="javascript runnable" data-runnable-output="jsonalert">0 === false</code></pre>

<pre class="green"><code class="javascript runnable" data-runnable-output="jsonalert">5 == "5"</code></pre>
<pre class="red"><code class="javascript runnable" data-runnable-output="jsonalert">5 === "5"</code></pre>

<pre class="green"><code class="javascript runnable" data-runnable-output="jsonalert">var a = {};
a == "[object Object]"</code></pre>
<pre class="red"><code class="javascript runnable" data-runnable-output="jsonalert">var a = {};
a === "[object Object]"</code></pre>

<p>type conversion

<p>identity
</div>

<p class="alert article">Must read article about Javascript [equality](http://rayfd.me/2007/03/18/really-understanding-javascripts-equality-and-identity/)</p>

---

## API References

<p class="alert">[Documentation for all global objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects)</p>

---
---

Control Flow
============

---

## throw

`Error`, `EvalError`, `InternalError`, `RangeError`, `ReferenceError`, `StopIteration`, `SyntaxError`, `TypeError`, `URIError`

---

## if, else

``` javascript
if (typeof a === "undefined") {
    // a is undefined
} else if (a instanceof Number) {
    // a is a Number
} else {
    throw new Error('Hey, you missed the contract !')
}
```

---

## in

<pre><code class="javascript runnable" data-runnable-output="jsonalert">var obj = {
    foo: null
};

"foo" in obj;
</code></pre>

<p class="alert tip">Used to check existance of a variable</p>

---

## while, do {} while

---

## for, for in, for of, hasOwnProperty.

---
---

APIs
====

File, Math

