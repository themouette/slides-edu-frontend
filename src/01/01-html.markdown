HTML
====

---

History
-------

* 1991: [Tim Berners-Lee](http://en.wikipedia.org/wiki/Tim_Berners-Lee) annonces Web creation on Usenet
* 1993: Mosaic and HTML enter the place (images and forms)
* 1994: Netscape styles the web (CSS and attributes)
* 1996: HTML 2 is the first standardized version
* 1999: HTML 4.1 Add frame and restrict allowed attributes
* 2001: XHTML 1.1 or Let the standard war begin
* 2007: HTML 5

<p class="fragment big" style="margin-top: 20px;">You should use <strong>HTML5</strong></p>

Note:
1993, HTML was not standardized, W3C draft was called HTML+

---

Definition
----------

> <span class="fragment highlight-current-red">**HyperText Markup
> Language**</span> is the <span class="fragment
> highlight-current-red">main</span> <span class="fragment
> highlight-current-red">markup language</span> for creating <span
> class="fragment highlight-current-red">web pages</span> and other information
> that can be displayed in a web browser.
>
> <!-- .element: class="source" --> [Wikipedia](http://en.wikipedia.org/wiki/HTML)

---

Sample
------

``` html
<!doctype HTML>
<html lang="en">

    <head>
        <meta charset="UTF-8">
    </head>

    <body class="theme">

        <h1>Hello World</h1>

    </body>
</html>
```

---

Doctype
-------

``` html
<!doctype HTML>
```

> A document type definition (DTD) is a set of markup declarations that define a
> document type for an SGML-family markup language (<accronym
> title="Standard Generalized Markup Language">SGML</accronym>, <accronym
> title="Extensible Markup Language">XML</accronym>, <accronym title="Hyper Text
> Markup Language">HTML</accronym>).
>
> <!-- .element: class="source" --> [Wikipedia](http://en.wikipedia.org/wiki/Document_type_definition)

---

Document
--------

Here is a typical document.

``` html
<html lang="en">

    <head>
        <meta charset="UTF-8">
    </head>

    <body>
    </body>

</html>
```

* `<html>` element **is the page**.
* `<head>` is the page **metadata**
* `<body>` is the page **content**.

---

Tag
---

<p class="big">
&lt;<span class="fragment highlight-red" data-fragment-index="1">body</span> <span
class="fragment highlight-current-green" data-fragment-index="2"><span class="fragment
highlight-green" data-fragment-index="3">class</span>="<span class="fragment highlight-green" data-fragment-index="4">foo</span>"</span>>
<span class="fragment highlight-blue" data-fragment-index="5">&lt;/<span class="fragment highlight-red"
data-fragment-index="1">body</span>></span>
</p>
<p class="big" style="margin: 20px 0;">
&lt;<span class="fragment highlight-red" data-fragment-index="1">i</span> <span
class="fragment highlight-current-green" data-fragment-index="2"><span class="fragment
highlight-green" data-fragment-index="3">class</span>="<span class="fragment highlight-green" data-fragment-index="4">foo</span>"</span> <span class="fragment highlight-blue" data-fragment-index="5">/</span>>
</p>

tagname <!-- .element: class="fragment" data-fragment-index="1" style="float: left; width: 25%; color: red; margin-top: 20px;" -->

attribute <!-- .element: class="fragment" data-fragment-index="2" style="float: left; width: 25%; color: green; margin-top: 20px;" -->

name <!-- .element: class="fragment" data-fragment-index="3" style="float: left; width: 25%;color: green; margin-top: 20px;" -->

and value <!-- .element: class="fragment" data-fragment-index="4" style="float: left; width: 25%;color: green; margin-top: 20px;"-->

<!-- .element: class="fragment" data-fragment-index="5" style="color: blue;margin-top: 120px;"--> closing is **optional**

<!-- .element: class="fragment" data-fragment-index="6" style="margin-top: 20px;"--> but explicit is **always** better than implicit

---

Syntax
------

<pre class="green"><code class="html">
&lt;em>I &lt;strong>really&lt;/strong> mean that&lt;/em>.

</code></pre>

<p><em>I <strong>really</strong> mean that</em>.</p>

<pre class="red"><code class="html">
&lt;em>Invalid: I &lt;strong>really&lt;/em> mean that&lt;/strong>.

</code></pre>

---

Metadata tags
-------------

* `<title>` Defines the title of the document, shown in a browser's title bar or on
    the page's tab.
* `<link>`  Used to link JavaScript and external CSS with the current HTML document.
* `<meta>`  Defines metadata that can't be defined using another HTML element.
* `<style>` Used to write inline CSS.

> <!-- .element: class="source" --> [<accronym title="Mozilla Developer
> Network">MDN</accronym>](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5/HTML5_element_list)

---

Script tags
-----------

* `<script>`  Defines either an internal script or a link to an external script.
The script language is JavaScript.
* `<noscript>`  Defines alternative content to display when the browser doesn't
support scripting.

> <!-- .element: class="source" --> [<accronym title="Mozilla Developer
> Network">MDN</accronym>](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5/HTML5_element_list)

---

Meaningless tags
----------------

Elements `div` and `span` are available for style. They have no semantic meaning.

``` html
<div>
    Hello I'm a <span>span</span> in a div.
</div>
```
> <div>
>     Hello I'm a <span>span</span> in a div.
> </div>

Use them for style purpose.

---

Text
----

``` html
<p>
    Something <strong>very</strong> <em>important</em>
    <accronym title="To Me">2M</accronyme>
</p>
```

> <p>
>     Something <strong>very</strong> <em>important</em>
>     <accronym title="To Me">2M</accronyme>
> </p>

More with `<address>`, `<small>`, `<h1>`, `<h2>`, `<blockquote>`...

---

Tables
------

<!-- .slide: class="html-demo" -->

> <table>
>     <thead>
>         <tr><th>title 1</th><th>title 2</th></tr>
>     </thead>
>     <tfoot>
>         <tr><td colspan="2">I'm the footer</td></tr>
>     </tfoot>
>     <tbody>
>         <tr><td>value</td><td>value</td></tr>
>         <tr><td>value</td><td>value</td></tr>
>     </tbody>
> </table>

``` html
<table>
    <thead>
        <tr><th>title 1</th><th>title 2</th></tr>
    </thead>
    <tfoot>
        <tr><td colspan="2">I'm the footer</td></tr>
    </tfoot>
    <tbody>
        <tr><td>value</td><td>value</td></tr>
        <tr><td>value</td><td>value</td></tr>
    </tbody>
</table>
```

---

Lists
-----

<!-- .slide: class="html-demo lists" -->

<div class="three-columns">
    <div class="fragment" data-fragment-index="1">
        <ul>
            <li>lorem ipsum</li>
        </ul>
    </div>
    <div class="fragment" data-fragment-index="2">
        <ol>
            <li>lorem ipsum</li>
        </ol>
    </div>
    <div class="fragment" data-fragment-index="3">
        <dl>
            <dt>title</dt>
            <dd>definition</dd>
        </dl>
    </div>
</div>

<div class="three-columns">
    <h4 class="fragment" data-fragment-index="1">Unordered list</h4>
    <h4 class="fragment" data-fragment-index="2">Ordered list</h4>
    <h4 class="fragment" data-fragment-index="3">Definition list</h4>
</div>

<div class="three-columns">
<pre class="fragment" data-fragment-index="1"><code class="html">&lt;ul>
    &lt;li>lorem ipsum&lt;/li>
&lt;/ul>
</code></pre>
<pre class="fragment" data-fragment-index="2"><code class="html">&lt;ol>
    &lt;li>lorem ipsum&lt;/li>
&lt;/ol>
</code></pre>
<pre class="fragment" data-fragment-index="3"><code class="html">&lt;dl>
    &lt;dt>title&lt;/dt>
    &lt;dd>definition&lt;/dd>
&lt;/dl>
</code></pre>
</div>

---

Forms
-----

<!-- .slide: class="html-demo" -->

> <form method="POST" action="/banana" enctype="multipart/form-data">
>     <p>
>         <label>Name: <input type="text" name="name" /></label>
>         <label>
>             Color: <input type="color" name="color" value="#D8DE26" />
>         </label>
>     </p>
>
>     <p>
>         <label for="color">Avatar:</label>
>         <span><input type="file" name="avatar" /></span>
>         <input type="button" value="Create" />
>     </p>
> </form>

``` html
<form method="POST" action="/banana" enctype="multipart/form-data">
    <p>
        <label>Name: <input type="text" name="name" /></label>
        <label>
            Color: <input type="color" name="color" value="#D8DE26" />
        </label>
    </p>

    <p>
        <label for="color">Avatar:</label>
        <span><input type="file" name="avatar" /></span>
        <input type="button" value="Create" />
    </p>

</form>
```

---

Links
-----

<!-- .slide: class="html-demo" -->

> Find the slides on <a href="https://github.com/themouette/slides-edu-frontend">github</a>.

``` html
Find the slides on
<a href="https://github.com/themouette/slides-edu-frontend">github</a>.
```
