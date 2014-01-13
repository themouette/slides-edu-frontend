<h1>Invocation pattern</h1>
<h3>aka <code>this</code> keyword</h3>

---

<h2>When calling a method on an object</h2>

<pre><code class="javascript runable">var john = {
    name: "John"
};

john.sayHello = function () {
    alert("Hello " + this.name);
};

john.sayHello();</code></pre>

<p><code>this</code> is the object.</p>


---

<h2>When Calling A Function</h2>

<pre><code class="javascript runable">var name = "Garry";

function sayHello() {
    alert("Hello " + this.name);
}

sayHello();</code></pre>

<p><code>this</code> is the current context:</p>


---

<h2>Common Gotcha</h2>

<pre><code class="javascript runable">var name = "Garry";
var joe = {
    name: "Joe"
};

joe.sayHello = function sayHello() {
    alert("Hello " + this.name);
}

var fct = joe.sayHello;

fct();</code></pre>


---

<h2>Force execution context</h2>

<pre><code class="javascript runable">var joe = {
    name: "Joe"
};
function sayHello(greeting, to) {
    greeting || (greeting = 'Hello');
    to || (to = 'annonymous');

    alert([greeting, to, 'I\'m', this.name].join(' '));
}

sayHello.call(joe, 'Good morning', 'Garry');
sayHello.apply(joe, ['Good morning', 'Garry']);</code></pre>

<p>will both result into</p>

<blockquote><p>Good morning Garry, I'm Joe.</p></blockquote>

---

<h2>Context binding</h2>

<pre><code class="javascript">function bind(context, method) {

    return function () {
        method.apply(context, arguments);
    }
}</code></pre>

<div style="margin-top: 50px;">
<p>This way, you can make sure the context is what you expect.</p>

<p>In <strong>jQuery</strong> it is called <code>$.proxy</code>.</p>
</div>

---

<p>
Read more on partial application on
<a href="http://benalman.com/news/2012/09/partial-application-in-javascript/">Cowboy's blog</a>
and
<a href="http://doctrina.org/Javascript-Function-Invocation-Patterns.html">Invocation patterns in depth</a>
</p>

