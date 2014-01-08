Css selectors
=============

<img src="img/01/logo_css3.png" style="height: 350px; padding: 20px;" />

---

Cascading StyleSheet
--------------------

* [CSS 2.1 Selector specifications](http://www.w3.org/TR/CSS2/selector.html)
* [CSS 3 Selector specifications](http://www.w3.org/TR/css3-selectors/)

---

TagName selector
----------------

<div class="two-columns">
<div style="width: 30%">
    <p>**Try this:**</p><br />

    <ul>
        <li>**`*`**</dd>
        <li>**`div`**</li>
        <li>**`div p`**</li>
    </ul>
</div>

<div class="dom-match" style="width: 66%">
    <div>
        <p></p>
    </div>
    <p></p>
</div>

</div>

---

\#id
---

<div class="two-columns">
<div style="width: 30%">
    <p>**Try this:**</p><br />

    <ul>
        <li>**`#foo`**</dd>
        <li>**`div#foo`**</li>
        <li>**`p#foo`**</li>
    </ul>
</div>

<div class="dom-match" style="width: 66%">
    <div>
        <p id="foo"></p>
    </div>
    <p></p>
</div>

</div>

---

.classname
----------

<div class="two-columns">
<div style="width: 30%">
    <p>**Try this:**</p><br />

    <ul>
        <li>**`.foo`**</dd>
        <li>**`div.foo`**</li>
        <li>**`p.foo`**</li>
    </ul>
</div>

<div class="dom-match" style="width: 66%">
    <div class="foo">
        <p></p>
    </div>
    <p class="foo"></p>
</div>

</div>

---

[attr=value]
------------

<div class="two-columns">
<div style="width: 30%">
    <p>**Try this:**</p><br />

    <ul>
        <li>**[data-foo]**</dd>
        <li>**[data-foo=bar]**</li>
        <li>**[data-foo^=b]**</li>
        <li>**[data-foo$=r]**</li>
        <li>**[data-foo*=a]**</li>
    </ul>
</div>

<div class="dom-match" style="width: 66%">
    <div data-foo="foo">
        <p data-foo="bar"></p>
    </div>
    <p>
        <span data-foo="baz"></span>
    </p>
</div>

</div>

---

Position
--------

<div class="two-columns">
<div style="width: 30%">
    <p>**Try this:**</p><br />

    <ul>
        <li>p:nth-child(0)</dd>
        <li>:nth-child(odd)</li>
        <li>:nth-child(3n+2)</li>
        <li>:nth-child(2)</li>
        <li>:nth-of-type(2)</li>
        <li>:first-child</li>
        <li>span:first-of-type</li>
    </ul>
</div>

<div class="dom-match" style="width: 66%">
    <div>
        <p></p>
        <span></span>
        <p></p>
    </div>
    <p>
        <span></span>
    </p>
</div>

</div>

---

Going further
-------------

* [CSS3 selector reference](http://www.w3.org/TR/css3-selectors/)
* [Smashing magazine "taming CSS selector"](http://coding.smashingmagazine.com/2009/08/17/taming-advanced-css-selectors/)

