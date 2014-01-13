
# Variables and contexts


---

<h2>Contexts</h2>

<pre><code class="javascript runnable">var foo = "outside";
function test() {
    var foo = "inside";
    console.log('test foo is "%s"', foo);
}

test();
console.log('outside foo is "%s"', foo);</code></pre>

<p>Will output</p>

<pre class="fragment"><code class="javascript">test foo is "inside"
outside foo is "outside"</code></pre>

<blockquote class="fragment">
    <p>Each function defines its own context and can access definition context.</p>
</blockquote>



---

<h2>Local vs Global</h2>

<p>Any variable not declared with <code>var</code> is <strong>global</strong>.</p>

<pre><code class="javascript runnable">var foo = "outside";
function test() {
    foo = "inside";
    console.log('test foo is "%s"', foo);
}

test();
console.log('outside foo is "%s"', foo);</code></pre>

<p>Will output</p>

<pre class="fragment"><code class="javascript">test foo is "inside"
outside foo is "inside"</code></pre>



---

<h2>Hoisting: variables</h2>

<div class="two-columns">
<pre><code class="javascript runnable">var foo = 1;
function bar() {
    if (!foo) {
        var foo = 10;
    }
    alert(foo);
}
bar();
</code></pre>
<pre class="fragment"><code class="javascript">// Is compiled into
var foo = 1;
function bar() {
    var foo;
    if (!foo) {
        foo = 10;
    }
    alert(foo);
}
bar();</code></pre>

</div>

<div class="fragment">
    <blockquote style="margin-top:50px;">
        <p>Variable declarations are hoisted to the top of context by compiler</p>
    </blockquote>
</div>



---

<h2>Hoisting: functions</h2>

<div class="two-columns">
<pre><code class="javascript runnable">var a = 1;
function b() {
    a = 10;
    return;
    function a() {};
}

b();
alert(a);
</code></pre>
<pre class="fragment"><code class="javascript">// Is compiled into
var a = 1;
function b() {
    // declare a symbol locally
    function a() {};
    a = 10;
    return;
}

b();
alert(a);</code></pre>
</div>

<div class="fragment">
    <blockquote style="margin-top:50px;">
        <p>Function declarations are hoisted too.</p>
    </blockquote>
    <p style="margin-top:50px;">To go further on hoisting: <a href="http://www.adequatelygood.com/JavaScript-Scoping-and-Hoisting.html">adequatelygood</a></p>
</div>


