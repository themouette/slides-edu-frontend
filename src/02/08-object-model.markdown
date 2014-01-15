
<h1>Object Model</h1>

---

## Constructor

<p class="separation">A constructor is a simple function</p>

``` javascript
var User = function User(properties) {
    // init properties if falsy
    properties || (properties = {});

    this.firstname = properties['firstname'];
    this.lastname  = properties['lastname'];
};
```

<p class="separation">Instantiation is as expected:</p>

``` javascript
var john = new User({
    firstname: "John",
    lastname: "Doe"
});
```

---

## Adding functions

``` javascript
User.prototype.sayHello = function sayHello() {
    alert("Hello, I'm " + this.firstname);
};
```

To be more efficient, use `extend` function:

``` javascript
$.extend(User.prototype, {
    sayHello: function sayHello() {
        alert("Hello, I'm " + this.firstname);
    },
    goodBye: function goodBye() {
        alert("Bye !");
    }
});
```

---

## Reference

[Introduction to Object Oriented JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript)

---

## Prototype is great

* Multiple inheritance;
* Add a method to all instances;
* Pattern strategy.

---

## Prototype cons

* No visibility;
* Not natural at first glance;
* You can mess up existing code.

> Never override native objects prototypes.

