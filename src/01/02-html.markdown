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

``` html
<html lang="en">
    <head></head>
    <body></body>
</html>
```

Html element **is the page**.

Head is the page **metadata**, body is the page **content**.

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

<!-- .element: class="fragment" data-fragment-index="6" style="margin-top: 20px;"--> but explicit is **always** better than explicit

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

HTML5
-----

---

Transparent
-----------

div, span

---

Semantic
--------

``` html
<p>
    Something <strong>very</strong> <em>important</em>
    <accronym title="To Me">2M</accronyme>
</p>
```

---

Table and list
--------------

table, tbody, thead, tfoot, ul, li, ol, dl, dd

---

Forms
-----

input, form, select, button, textarea, file, label, fieldset, legend...

``` html
<form oninput="result.value=parseInt(a.value)+parseInt(b.value)">
    <input type="range" name="b" value="50" /> +
    <input type="number" name="a" value="10" /> =
    <output name="result"></output>
</form>
```

<form oninput="result.value=parseInt(a.value)+parseInt(b.value)">
    <input type="range" name="b" value="50" /> +
    <input type="number" name="a" value="10" /> =
    <output name="result"></output>
</form>

---

Layout
------

section, header, footer, article, aside...

---

Content
-------

img, video, audio, canvas...


