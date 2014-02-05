Organize your BB Application
============================

---

## Directory Layout

<pre><code style="line-height: 1.3em;">src/
├ views/
│  └ myAwesomeView.js
├ models/
│  └ myAwesomeModel.js
├ collections/
│  └ myAwesomeCollection.js
├ routers/
│  └ myAwesomeRouter.js
├ templates/
│  ├ show.html
│  └ list.html
│
└ kernel.js
</code></pre>

---

## Kernel

The application main entry point

1. Load dependencies
1. Get remote data
1. Register routes
1. Setup UI
1. Show loading
1. Wait for data
1. Start router

---

## Use Template engine

```
var tpl = _.template('Hello <%= name %>');

var view = Backbone.View.extend({
    render: function () {
        var data = this.getData();
        var html = tpl(data);
        this.$el.html(html);
        // always return this
        return this;
    }
});
```

[Choose a template engine](http://garann.github.io/template-chooser/)

---

## Ecosystem

* [Plugins](https://github.com/jashkenas/backbone/wiki/Extensions%2C-Plugins%2C-Resources)
* [Marionnette](http://marionettejs.com/)
* [Chaplin](http://chaplinjs.org/)

---

## Rabbit Holes

* [Zombies](http://lostechies.com/derickbailey/2011/09/15/zombies-run-managing-page-transitions-in-backbone-apps/)
