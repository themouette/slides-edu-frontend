<!-- .slide: class="hide-title" -->
Backbone
========

<img src="img/05/backbone-logo.png" style="border: none;box-shadow:none;" />

* Website: [Backbone](http://backbonejs.org/)
* Dependencies: [underscore](http://underscorejs.org/) and [jQuery](http://jquery.com/)
* Developed by: [Jeremy Ashkenas](http://ashkenas.com)
* Design: MVVM (Model - View - ViewModel)

---

Backbone.js gives structure to web applications by providing
<br />
<br />

* **models** with key-value binding and custom events,
* **collections** with a rich API of enumerable functions,
* **views** with declarative event handling

<br />
and connects it all to your existing API over a **RESTful JSON interface**.

<!-- .element: class="source" --> [backbonejs.org](http://backbonejs.org/)

---

## Backbone.Events

Observable implementation. Available in **all Backbone objects**

<div class="alert doc">
<p class="text-left">Main methods are:</p>

<ul class="two-columns">
  <li>`on`</li>
  <li>`once`</li>
  <li>`off`</li>
  <li>`trigger`</li>
  <li>`listenTo`</li>
  <li>`stopListening`</li>
</ul>
</div>

---

## Backbone.Model

``` javascript
var User = Backbone.Model.extend({
    url: 'http://api.com/users',
    defaults: {
        name: 'John Doe'
    }
});

var Joe = new User({
    name: "Joe"
});

Joe.save()
    .fail(function (xhr) {
        alert(xhr.responseText)
    });
```

---

## Backbone.Collection

``` javascript
var UserCollection = Backbone.Collection.extend({
    model: User,
    urlRoot: 'http://api.com/users',
    defaults: {
        name: 'John Doe'
    }
});

var users = new UserCollection();
users.fetch()
    .fail(function (xhr) {
        alert(xhr.responseText)
    });
```

---

## Model And Collection

* Both relies on `Backbone.Sync`, so changing persistence layer is just replacing
original `Backbone.Sync`.
* Both trigger `change` events when something changes.

---

## Backbone.View

``` javascript
var UserView = Backbone.View.extend({
    initialize: function () {
        if (!this.model)
            throw new Error('Model is required.');
    },
    render: function () {
        this.$el.html(this.model.)
        return this;
    }
});

var view = new UserView({
    model: Joe
});
view.render().$el.appendTo('body');
```

---

## View Events

``` javascript
var View = Backbone.View.extend({
    events: {
        'click input[type=submit]': 'submitForm'
    },
    submitForm: function (e) {
        e.preventDefault();
        this.model.set(
            serializeFormData(this.$('form'))
        );
    }
});
```

<p class="alert info">This behavior relies on `delegateEvents` and `undelegateEvents`.</p>

---

## Nesting Views

You should extend `delegateEvents` and `undelegateEvents` to manage subview
event lifecycle.

---

## Backbone.Router

```
var UserRouter = Backbone.Router.extend({
    routes: {
        '': 'index'
    },
    index: function () {
        var user = new User({id: 12});
        user.fetch().then(function() {
              var userView = new UserView({model: user});
              userView.render().$el.appendTo('body');
          }, displayAjaxError);
    }
});

var userRouter = new UserRouter();
Backbone.history.start();
```
