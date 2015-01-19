# Document Flow

---

## Elements Ordering

![](img/04/document-flow.png)

> Elements are append to the flow in the order they appear in the document.

---

## Display

<div class="three-columns">
<ul>
    <li>none</li>
    <li>inline</li>
    <li>block</li>
    <li>list-item</li>
    <li>inline-block</li>
    <li>inline-table</li>
</ul>
<ul>
    <li>table</li>
    <li>table-cell</li>
    <li>table-column</li>
    <li>table-column-group</li>
    <li>table-footer-group</li>
    <li>table-header-group</li>
    <li>table-row</li>
    <li>table-row-group</li>
</ul>
<ul>
    <li>flex</li>
    <li>inline-flex</li>
    <li>grid</li>
    <li>inline-grid</li>
    <li>run-in</li>
    <li>inherit</li>
</ul>
</div>

<a class="icontext doc"
href="https://developer.mozilla.org/en/docs/Web/CSS/display">Documentation on
the MDN</a> and
<a class="icontext link"
href="http://css-tricks.com/almanac/properties/d/display/">CSS trick</a>

---

## Display: block

<div class="two-columns">
<pre><code class="css">
div {
    display: block;
    height: 50px;
    background-color: #d00;
    border: 3px solid #f00;
    margin: 60px 30px;
}
</code></pre>
<div>
    <div style="height: 50px;background-color: #fcc; border: 3px solid #f00;margin: 60px 30px;">Block 1</div>
    <div style="height: 50px;background-color: #cfc; border: 3px solid #0f0;margin: 60px 30px;">Block 2</div>
    <div style="height: 50px;background-color: #ccf; border: 3px solid #00f;margin: 60px 30px;">Block 3</div>
</div>
</div>

> Note how margins are melted

---

## Display: inline-block

<div class="two-columns">
<pre><code class="css">
div {
    display: inline-block;
    height: 50px;
    background-color: #fcc;
    border: 3px solid #f00;
    margin: 30px;
}
</code></pre>
<div>
    <div style="display: inline-block; height: 50px;background-color: #fcc; border: 3px solid #f00;margin: 30px;">Block 1</div>
    <div style="display: inline-block; height: 50px;background-color: #cfc; border: 3px solid #0f0;margin: 30px;">Block 2</div>
    <div style="display: inline-block; height: 50px;background-color: #ccf; border: 3px solid #00f;margin: 30px;">Block 3</div>
</div>
</div>

---

## Display: inline

<div class="two-columns">
<pre><code class="css">
div {
    display: inline;
    height: 50px;
    background-color: #fcc;
    border: 3px solid #f00;
    margin: 30px;
}
</code></pre>
<div style="text-align: left;">
    <div style="display: inline; height: 50px;background-color: #fcc; border: 3px solid #f00;margin: 30px;">Block 1</div>
    <div style="display: inline; height: 50px;background-color: #cfc; border: 3px solid #0f0;margin: 30px;">Block 2</div>
    <div style="display: inline; height: 50px;background-color: #ccf; border: 3px solid #00f;margin: 30px;">Block 3</div>
</div>
</div>

---

## Position

* static
* relative
* absolute
* fixed
* sticky

<a class="icontext doc"
href="https://developer.mozilla.org/en/docs/Web/CSS/position">Documentation on
the MDN</a>

---

## Position: static

> This keyword lets the element use the normal behavior, that is it is laid out
> in its current position in the flow.  The top, right, bottom, left and z-index
> properties do not apply.

<div style="height: 50px;background-color: #fcc; border: 3px solid #f00;">
    Hello
</div>
<div style="height: 50px;background-color: #cfc; border: 3px solid #00f;">
    Hello
</div>
<div style="height: 50px;background-color: #ccf; border: 3px solid #00f;">
    Hello
</div>

---

## Position: relative

> This keyword lays out all elements as though the element were not positioned,
> and then adjust the element's position, without changing layout (and thus
> leaving a gap for the element where it would have been had it not been
> positioned).


<div style="background-color: #fcc; border: 3px solid #f00;">
    This is a span <span style="background-color: #0f0; border: 1px solid #cfc; position: relative; top: 12px; left: 12px;">
        style="position: relative; top: 12px; left: 12px;
    </span> see how it works
</div>

<div class="alert info fragment">
The effect of position:relative on table-*-group, table-row,
table-column, table-cell, and table-caption elements is undefined.
</div>

---

## Position: absolute

> Do not leave space for the element. Instead, position it at a specified
> position relative to its **closest positioned ancestor** or to the containing
> block.

<div style="background-color: #fcc; border: 3px solid #f00;position: absolute; left: 10px; top:10px;" class="fragment">
    position: absolute; left: 10px; top:10px;
</div>

<div class="alert info fragment">
Absolutely positioned boxes can have margins, they do not collapse
with any other margins.
</div>

---

## Position: absolute

``` css
#container { position: relative; height: 100px; }
#one { position: absolute; left: 10px; top: 0; bottom: 0;
        width: 70px; }
#two { margin-left: 95px; }
```

<div style="position: relative; background-color: #fcc; border: 3px solid #f00; height: 100px;">
    <div style="position: absolute;left: 10px; top: 0; bottom: 0; width: 70px; background-color: #cfc; border: 3px solid #0f0;">
        One
    </div>
    <div style="background-color: #ccf; border: 3px solid #00f; margin-left: 95px;">
        Two
    </div>
</div>


---

## Position: fixed

> Do not leave space for the element. Instead, position it at a specified
> position relative to the screen's viewport and don't move it when scrolled.
> When printing, position it at that fixed position on every page.

---

## Float

``` css
#document-flow-float-1 {
    background-color: #cfc;
    border: 3px solid #0f0;
    text-align: left;
}
#document-flow-float-1 img {
    float: left;
}
```

<div id="document-flow-float-1">
    <img src="http://placehold.it/150x100">
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
    tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
    vero eos et accusam et justo duo dolores et ea rebum.
</div>

<style>
#document-flow-float-1 {
    background-color: #cfc; border: 3px solid #0f0;
    text-align: left;
}
#document-flow-float-1 img {
    float: left;
}
</style>

---

## Float

``` css
#document-flow-float-2 {
    background-color: #cfc;
    border: 3px solid #0f0;
    text-align: left;
}
#document-flow-float-2 img {
    float: left;
}
```

<div id="document-flow-float-2">
    <img src="http://placehold.it/150x100">
</div>

<style>
#document-flow-float-2 {
    background-color: #cfc; border: 3px solid #0f0;
    text-align: left;
}
#document-flow-float-2 img {
    float: left;
}
</style>

---

## Float

``` css
#document-flow-float-3 {
    background-color: #cfc;
    border: 3px solid #0f0;
    text-align: left;
}
#document-flow-float-3:after {
    content: "";
    clear: both;
    display: block;
}
#document-flow-float-3 img {
    float: left;
}
```

<div id="document-flow-float-3">
    <img src="http://placehold.it/150x100">
    <span><!-- due to revealjs mardown issue, use span instead of :after --></span>
</div>

<style>
#document-flow-float-3 {
    background-color: #cfc; border: 3px solid #0f0;
    text-align: left;
}
#document-flow-float-3 span {
    clear: both;
    display: block;
}
#document-flow-float-3 img {
    float: left;
}
</style>
