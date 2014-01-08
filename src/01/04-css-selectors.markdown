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

* `*`: match any node
* `div`: match any **div** node

<div class="two-columns dom-match">
<div></div>
<div class="example">
    <div>
        <p></p>
    </div>
    <p></p>
</div>
</div>

<script>
document.addEventListener('ready', function () {
    document.querySelectorAll('.dom-match').forEach(function (elt) {
        var DOM = elt.querySelector('example');
        var interactive = document.Element();
        var frag = document.createDocumentFragment();
        frag.appendChild();
    });
});
</script>

---

.class vs #id
-------------

Elements can be identified by unique #id

An element can have multiple classes

---

Selecting nodes
---------------

---

Box model
---------

* position
*

---

Transitions
-----------

---

Shadows
-------


