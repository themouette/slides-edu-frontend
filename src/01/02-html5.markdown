HTML5
-----

---

References
----------

* [tags and attributes](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5/HTML5_element_list)
* [All input types](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)

---

Forms
-----

-----

Input type="range"
------------------

<!-- .slide: class="html-demo" -->

> <form oninput="result.value=parseInt(a.value)">
>     <p>
>         <label>Range: <input type="range" min="10" max="30" name="a" value="10" /></label>
>         <output name="result">10</output>
>     </p>
> </form>

``` html
<label>
    Range:
    <input type="range" min="10" max="30" name="a" />
</label>
```

---

Input type="color"
------------------

<!-- .slide: class="html-demo" -->

> <form oninput="result.value=a.value">
>     <p>
>         <label>Color: <input type="color" name="a" value="#cacaca" /></label>
>         <output name="result">#cacaca</output>
>     </p>
> </form>

``` html
<label>
    Color:
    <input type="color" name="a" value="#cacaca" />
</label>
```

---

Input type="number"
------------------

<!-- .slide: class="html-demo" -->

> <form>
>     <p>
>         <label>Number: <input type="number" name="a" value="12" /></label>
>     </p>
> </form>

``` html
<label>
    Number:
    <input type="number" name="a" />
</label>
```

---

Input type="date"
------------------

<!-- .slide: class="html-demo" -->

> <form>
>     <p>
>         <label>When? <input type="date" name="a" /></label>
>     </p>
> </form>

``` html
<label>
    When?
    <input type="date" name="a" />
</label>
```

---

Textual inputs
--------------

<!-- .slide: class="html-demo" -->

> <form>
>     <p>
>         <label>type="phone": <input type="tel" name="a" /></label>
>     </p>
>     <p>
>         <label>type="email": <input type="email" name="b" class="validate" /></label>
>     </p>
>     <p>
>         <label>type="url": <input type="url" name="c" class="validate" /></label>
>     </p>
>     <p>
>         <label>type="search": <input type="search" name="d" /></label>
>     </p>
> </form>

---

Placeholder
-----------

<!-- .slide: class="html-demo" -->

> <form>
>     <p>
>         <label>Email <input type="email" placeholder="foo@example.com" /></label>
>     </p>
> </form>

``` html
<label>
    Email
    <input type="email" placeholder="foo@example.com" />
</label>
```

---

Form Validation
---------------

<!-- .slide: class="html-demo validate" -->

> <form>
>     <p>
>         <label>
>             Enter 1-3 numbers
>             <input type="text" pattern="^\d{1,3}$" class="validate" required />
>         </label>
>     </p>
> </form>

``` html
<label>
    Enter 1-3 numbers
    <input type="text" pattern="^\d{1,3}$" class="validate" required />
</label>
```


---

Form Submission
---------------

On a submit button:

* `formnovalidate`: submit event invalid forms
* `formaction`: Replaces form action
* `formmethod`: Replaces form method

---

Layout
------

<div class="two-columns">
* [Learnlayout](http://learnlayout.com/) by [bocoup](http://bocoup.com/)
* [HTML5 layout from scratch](http://coding.smashingmagazine.com/2009/08/04/designing-a-html-5-layout-from-scratch/)
</div>

![Typical html5 layout](img/01/html5pagelayout.png)


> <!-- .element: class="source" --> Image is courtesy of [Modesty Zhang](http://www.codeproject.com/Articles/146409/Semantic-HTML5-Page-Layout)


Note:
`<section>` Defines a section in a document.

`<nav>`     Defines a section that contains only navigation links.

`<article>` Defines self-contained content that could exist independently of the rest of the content.

`<aside>`   Defines some content loosely related to the page content. If it is removed, the remaining content still makes sense.

`<header>`  Defines the header of a page or section. It often contains a logo, the title of the Web site, and a navigational table of content.

`<footer>`  Defines the footer for a page or section. It often contains a copyright notice, some links to legal information, or addresses to give feedback.

`<main>`    Defines the main or important content in the document. There is only one `<main>` element in the document.

---

Content
-------

img, video, audio, canvas...


