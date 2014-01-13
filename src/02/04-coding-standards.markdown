# Coding standards

<img src="img/02/coding-standards.jpg" style="height: 500px;" />

---

<h2>CS: Braces</h2>

<p><a href="http://inimino.org/~inimino/blog/javascript_semicolons">automatic semicolon insertion</a> force to put braces at the EOL</p>

<pre class="red"><code class="javascript">// BAD
return
{
    foo: "foo"
};</code></pre>

<p class="vs">vs</p>

<pre class="green"><code class="javascript">// GOOD
return {
    foo: "foo"
}; </code></pre>

---

<h2>CS: Strings</h2>

<p>Use `Array.join()` to declare multiline strings</p>

<pre class="red"><code class="javascript">// BAD
var foo = 'Lorem ipsum dolor sit amet, consetetur '
        + 'sadipscing elitr, sed diam nonumy ';</code></pre>

<p class="vs">vs</p>

<pre class="green"><code class="javascript">// GOOD
var foo = [
    'Lorem ipsum dolor sit amet, consetetur ',
    'sadipscing elitr, sed diam nonumy '
    ].join(''); </code></pre>

---

<h2>CS: name your functions</h2>

<p>Lambda functions are shown as (anonymous) in debugger.</p>

<pre class="red"><code class="javascript">// BAD
var foo = function() {
    /* ... */
};</code></pre>

<p class="vs">vs</p>

<pre class="green"><code class="javascript">// GOOD
var foo = function foo() {
    /* ... */
};</code></pre>

---

<h2>CS: use JSON</h2>

<p>Variable initialization should remain readable</p>

<pre class="red"><code class="javascript">// BAD
var foo = new Object();
foo.name = 'John';
foo.age = 32;</code></pre>

<p class="vs">vs</p>

<pre class="green"><code class="javascript">// GOOD
var foo = {
    name: 'john',
    age: 32
};</code></pre>

---

<h2>CS: Semicolons</h2>

<p>Semicolons `;` are optional as <strong><accronym title="Automatic Semicolon Insertion">ASI</accronym></strong> insert them for us.</p>

<div class="two-columns">
<pre><code class="javascript">a = b + c
foo()</code></pre>
<pre class="fragment green"><code class="javascript">// All right
a = b + c ; foo()</code></pre>
</div>

<div class="two-columns">
<pre><code class="javascript">a = b + c
[1].push(a)</code></pre>
<pre class="fragment red"><code class="javascript">// Not what expected
a = b + c[1].push(a)
</code></pre>
</div>

<div class="two-columns">
<pre><code class="javascript">a = b + c
(opts || {}).foo ? bar() : baz()</code></pre>
<pre class="fragment red"><code class="javascript">// Not what expected
a = b + c(opts || {}).foo ? bar() : baz()</code></pre>
</div>

<div class="fragment">
    <blockquote style="margin-top:50px;">
        <p>Either you learn <accronym title="Automatic Semicolon Insertion">ASI</accronym> rules or you write semicolons</p>
    </blockquote>
    <p>To go further on
        <accronym title="Automatic Semicolon Insertion">ASI</accronym>:
        <a href="http://dailyjs.com/2012/04/19/semicolons/">DailyJS on <accronym title="Automatic Semicolon Insertion">ASI</accronym></a>
    </p>
</div>


---

<p class="big">
    <strong>More advices in the <a href="https://github.com/airbnb/javascript">Airbnb JavaScript Style Guide</a></strong>
</p>
