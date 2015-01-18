# CSS Syntax

---

``` css
selector {
    property: value;
}
```

---

## Selector Precision

``` css
p.foo {
    color: #f00;
}

p {
    color: #ccc;
}
```

[See it in action](./samples/04/01/override.html)

> The most precise selector always replaces less precise ones

---

## Declaration Order

``` css
p {
    color: #ccc;
    color: rgba(255, 125, 125, .3);
    color: blabla;
}
```

[See it in action](./samples/04/01/precedence.html)

> The latest declaration overrides the former ONLY IF IT IS VALID

---

## Important

``` css
p {
    color: #ccc !important;
    color: yellow;
}

p.foo {
    color: #f00;
}
```

[See it in action](./samples/04/01/important.html)

> `!important` overrides anything, no matter the selector precision or order.
