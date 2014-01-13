
# Closures

---

<h2>Definition</h2>

<p class="big">A <strong>closure</strong> is a <em>function</em> alongside a <em>referencing environment</em>.</p>

<p style="margin-top: 50px;text-align: left;">To be short, you can reference variables that belongs to the context where function was <strong>defined</strong>.</p>

<p>In the meantime, a function creates its <em>own context</em>.</p>

---

<h2>Example 1: public API</h2>

<pre><code class="javascript runable">var x = 0;
function incr() {
    x++;
    console.log(x);
}
function decr() {
    x--;
    console.log(x);
}

console.log(x); // log 0
incr();         // log 1
incr();         // log 2
decr();         // log 1</code></pre>

---

<h2>Example 2</h2>

<p>Create a callback from a variable:</p>

<pre><code class="javascript runable">function createAdd(number) {
    function doAdd(value) {
        return value + number;
    }

    return doAdd;
}

var add10 = createAdd(10);
alert(add10(1)); // returns 11</code></pre>

---

<h2>Example 3</h2>

<p>Closure creates it's own context:</p>

<pre><code class="javascript runable">var x = 5;

function foo() {
    var x = 12;
    function myFun() {
        // do something
    }
    return myFun;
}

console.log(foo());     // log function myFun() {...}
console.log(x);         // log 5
console.log(myFun);     // reference error</code></pre>

