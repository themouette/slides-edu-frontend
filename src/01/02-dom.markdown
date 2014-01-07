DOM
===

---

Document Object Modler
----------------------

> Some definition
>
> <!-- .element: class="source" --> [Wikipedia](http://en.wikipedia.org/wiki/Document_type_definition)

---

Document, window and elements
-----------------------------

---

Retreiving Elements
-------------------

* getElementById
* getElementsByTagName
* querySelector
* querySelectorAll

---

Tree Traversal
--------------

* childNodes
* parentElement

---

Tree Insertion
--------------

[**appendChild**](https://developer.mozilla.org/en-US/docs/Web/API/Node.appendChild) to insert at last position:

``` javascript
var child = element.appendChild(child);
```

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

Observable
----------

* addEventListener (attachEvent IE <= 8)

---

Element API
-----------

* [innerHTML](https://developer.mozilla.org/en-US/docs/Web/API/Element.innerHTML)
* addClassName
* style
* getAttribute
* ...

