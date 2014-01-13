DOM
===

<img src="img/01/dom-tree.png" style="height: 350px;"/>

<!-- .element: class="source" --> [image credits](http://www.annuairedubusiness.com/blog/internet-et-ses-secrets/4-html-elements.html)

---

Document Object Model
---------------------

> A cross-platform and language-independent convention for representing and
> interacting with objects in HTML, XHTML and XML documents.
>
> <!-- .element: class="source" --> [Wikipedia](http://en.wikipedia.org/wiki/Document_Object_Model)

[What is the DOM](http://css-tricks.com/dom/) from [css-tricks](http://css-tricks.com)

---

From HTML to DOM
----------------

<div class="two-columns">
<pre><code class="html">&lt;!DOCTYPE html>
&lt;html>
    &lt;head>
      &lt;meta charset="UTF-8">
    &lt;/head>
    &lt;body>
      &lt;h1>Hello world !&lt;/h1>
      &lt;p>som content.&lt;/p>
    &lt;/body>
&lt;/html>
</code></pre>
<div>
<img src="img/01/rendered-dom-tree.png"
</div>
</div>

---

Document, window and elements
-----------------------------

<img src="img/01/DOM-3D.png" style="height: 350px;"/>

---

DOM standardized API
--------------------

Basicly a set of interfaces:

[HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) inherits from [Element](https://developer.mozilla.org/en-US/docs/Web/API/Element) inherits form [Node](https://developer.mozilla.org/en-US/docs/Web/API/Node)

[Complete reference](https://developer.mozilla.org/en-US/docs/DOM)

---

Retreiving Elements
-------------------

* getElementById
* getElementsByTagName
* querySelector
* querySelectorAll

---

<!-- .slide: id="getElementById" class="dom-example" -->

ById and ByTagname
------------------

<br />
<pre><code class="javascript runnable" data-runnable-output="console">document.getElementById('getElementById');</code></pre>
<br />
<pre><code class="javascript runnable" data-runnable-output="console">document.getElementsByTagName('pre');</code></pre>
<br />

<p class="alert info">Open your browser console to see examples in action.</p>

---

<!-- .slide: id="querySelector" class="dom-example" -->

By css selector
---------------

<br />
<pre><code class="javascript runnable" data-runnable-output="console">document.querySelector('#querySelector pre');</code></pre>
<br />
<pre><code class="javascript runnable" data-runnable-output="console">document.querySelectorAll('#querySelector pre');</code></pre>
<br />

<p class="alert info">Open your browser console to see examples in action.</p>

---

Tree Traversal
--------------

* `parentElement`
* `childNodes`
* `children`
* `firstChild`
* `lastChild`

---

<!-- .slide: id="DOM-traversal" class="dom-example" -->

Play with tree traversal
------------------------

<br />

<div class="two-columns">
<div class="example" style="width:25%"><p>item 0</p><p>item 1</p><p>item 2</p><p>item 3</p><p>item 4</p></div>
<pre style="width:71%"><code class="javascript runnable">var element = document
    .querySelector('#DOM-traversal .example');

element.firstChild.style.color = "red";
element.childNodes.item(1)
        .style.border = "3px solid green";
element.lastChild.style.background = "blue";
</code></pre>
</div>

<br />

Note:
childNodes is a [NodeList](https://developer.mozilla.org/en-US/docs/Web/API/NodeList)

---

Tree Insertion
--------------

<br />

[**appendChild**](https://developer.mozilla.org/en-US/docs/Web/API/Node.appendChild) to insert at last position:

``` javascript
var child = element.appendChild(child);
```
<br />

[**insertBefore**](https://developer.mozilla.org/en-US/docs/Web/API/Node.insertBefore) to insert before an existing child:

``` javascript
var insertedElement = parentElement.insertBefore(newElement, referenceElement);
```

---

Tree Removal
------------

[**removeChild**](https://developer.mozilla.org/en-US/docs/Web/API/Node.removeChild) to remove an existing child:

``` javascript
var oldChild = element.removeChild(child);
```

---

<!-- .slide: class="no-transform" -->

EventTarget Interface
---------------------

[**addEventListener**](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget.addEventListener)

``` javascript
e.addEventListener('name', callback[, useCapture]);
```

[**removeEventListener**](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget.removeEventListener)

``` javascript
e.removeEventListener('name', callback[, useCapture]);
```

[**dispatchEvent**](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget.dispatchEvent)

``` javascript
element.dispatchEvent('name');
```

<p class="alert warn">Prior to IE8 (IE <= 8), use `detachEvent` and `attachEvent`.</p>

Note:
useCapture:

If true, useCapture indicates that the user wishes to initiate capture. After
initiating capture, all events of the specified type will be dispatched to the
registered listener before being dispatched to any EventTarget beneath it in the
DOM tree. Events which are bubbling upward through the tree will not trigger a
listener designated to use capture. See DOM Level 3 Events for a detailed
explanation. If not specified, useCapture defaults to false.

---

Common APIs
-----------

* [innerHTML](https://developer.mozilla.org/en-US/docs/Web/API/Element.innerHTML)
* addClassName
* [style](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Properties_Reference)
* getAttribute
* ...

---

Going further on Browser rendering
----------------------------------

Watch with subtitles:

<iframe width="420" height="315"
src="//www.youtube.com/embed/a2_6bGNZ7bA?rel=0&cc_load_policy=1"
frameborder="0" allowfullscreen></iframe>

And also [How Browsers Work by Tali Garsiel](http://taligarsiel.com/Projects/howbrowserswork1.htm)

---

Going further on Browser performances
-------------------------------------

<iframe src="//player.vimeo.com/video/67050197" width="500" height="281"
frameborder="0" webkitallowfullscreen mozallowfullscreen
allowfullscreen></iframe>

[Rendering without lumpy bits - Jake Archibald - Front-Trends 2013](http://vimeo.com/67050197)
from [Front-Trends](http://vimeo.com/fronttrends)

