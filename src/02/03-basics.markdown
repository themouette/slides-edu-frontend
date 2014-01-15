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

## Boolean

[Boolean reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)

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

<pre><code class="javascript runnable" data-runnable-output="alert">0.1 + 0.2 == 0.30000000000000004</code></pre>
<pre><code class="javascript runnable" data-runnable-output="alert">0.1 + 0.2 === 0.30000000000000004</code></pre>

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

<em class="fragment"><code class="javascript">parseInt("010")</code> returns 8 in pre-2013 browsers</em>.

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

## Date

<!-- .element: class="icontext doc" --> [Date reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)

---

## Bonus: `typeof` and `instanceof`


[instanceof reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof)
[typeof reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)

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

Operators
=========

---

## Arithmetic Operators

```
+, -, *, /, %, ++, --, unary -, unary +
```

<!-- .element: class="alert info" --> Arithmetic operators take numerical values (either literals or variables) as their operands and return a single numerical value.

<!-- .element: class="icontext doc" --> [Reference](https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Operators/Arithmetic_Operators)

---

## Assignment Operators

```
=, *=, /=, %=, +=, -=, <<=, >>=, >>>=, &=, ^=, |=
```

<!-- .element: class="alert info" --> An assignment operator assigns a value to its left operand based on the value of its right operand.

<!-- .element: class="icontext doc" --> [Reference](https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Operators/Assignment_Operators)

---

## Bitwise Operators

```
&, |, ^, ~, <<, >>, >>>
```

<!-- .element: class="alert info" --> Bitwise operators treat their operands as a set of 32 bits (zeros and ones) and return standard JavaScript numerical values.

<!-- .element: class="icontext doc" --> [Reference](https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Operators/Bitwise_Operators)

---

## Comparison Operators

```
==, !=, ===, !==, >, >=, <, <=
```

<!-- .element: class="alert info" --> A comparison operator compares its operands and returns a logical value based on whether the comparison is true.

<!-- .element: class="icontext doc" --> [Reference](https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Operators/Comparison_Operators)

---

## Logical Operators

```
&&, ||, !
```

<!-- .element: class="alert info" --> Logical operators are typically used with boolean (logical) values, and when they are, they return a boolean value.

Examples:

<pre><code class="javascript runnable" data-runnable-output="jsonalert">"foo" && 3;</code></pre>
<pre><code class="javascript runnable" data-runnable-output="jsonalert">2 || 3;</code></pre>

<!-- .element: class="icontext doc" --> [Reference](https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Operators/Logical_Operators)


---

## String Operators

```
+ and +=
```

<!-- .element: class="alert info" --> The string operators concatenate two string values together, returning another string that is the union of the two strings.

<!-- .element: class="icontext doc" --> [Reference](https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Operators/String_Operators)

---
---

Control Flow
============

<!-- .element: class="icontext doc" -->[All available statements](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements)

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

## Switch

``` javascript
switch(action) {
    case 'draw':
        drawit();
        break;
    case 'eat':
        eatit();
        break;
    default:
        donothing();
}
```

<p class="alert warning">Used for multiple branches based on a number or string</p>

---

## in

<pre><code class="javascript runnable" data-runnable-output="jsonalert">var obj = {
    foo: null
};

"foo" in obj;
</code></pre>

<p class="alert tip">Used to check existance of a variable</p>

---

## try, catch, finally, throw

``` javascript
try {
  foo.bar();
} catch (e) {
  if (e instanceof EvalError) {
    alert(e.name + ": " + e.message);
  } else if (e instanceof RangeError) {
    alert(e.name + ": " + e.message);
  }
} finally {
    foo.baz();
}
```

<!-- .element: class="icontext doc" --> [try...catch reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch)

---

# Error types

All the following errors should be available:

`Error`, `EvalError`, `RangeError`, `ReferenceError`, `SyntaxError`, `TypeError`, `URIError`

<p class="icontext doc">[All errors](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#Description)<p>

---

## while, do {} while

<div class="two-columns">
<pre><code class="javascript">var pancakes = [];
function is_empty(stack) {
    return !stack.length;
}

while (!is_empty(pancakes)) {
    eat_one(pancakes);
}
</code></pre>
<pre><code class="javascript">do {
   i += 1;
   document.write(i);
} while (i < 5);
</code></pre>
</div>

<span class="icontext doc">[do...while](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do...while)</span>
and
<span class="icontext doc"> [while reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while)</span>

---

## for

``` javascript
for (var i = 0; i < 9; i++) {
   n += i;
   myfunc(n);
}
```

---

## for in

Use `hasOwnProperty` to filter inherited properties:

``` javascript
for (var prop in obj) {

    if( obj.hasOwnProperty( prop ) ) {
        result += objName + "." + prop + " = " + obj[prop] + "\n";
    }

}
```

<p class="alert link">[for...in reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in)
and
[Why use hasOwnProperty](http://phrogz.net/death-to-hasownproperty)</p>

Note:

Problems occurs when Globals (Object, Array) are extended for instance.

---

## with

<!-- .element: class="alert error" --> Do not use with.

