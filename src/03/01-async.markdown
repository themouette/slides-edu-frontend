Asynchronous programming
========================

---

![Don't call us, we'll call you](img/03/dontcallus.png)

---

<p class="alert info">All I/O operations are asynchronous.</p>

So on blocking means **less resources required** as **idle times** are used to perform
**other tasks**.

---

Callback
--------

A function used to notify an asynchronous operation:

``` javascript
var fs = require('fs');

fs.readFile('/etc/passwd', function callMe(err, data) {
    if (err) throw err;
    console.log(data);
});
```

---

Observable
----------

When something happens on an object, an event is triggered:

``` javascript
var server = http.createServer();
server.on('request', respondToRequest);
server.listen(1337, '127.0.0.1');
```

---

Messaging / Mediator
--------------------

A single object is responsible for inter-module communication.

```
postman.on('user:create', function handleUserCreate(){});

postman.notify('userService', 'persist', {});
```

<!-- .element: class="source icontext doc" --> [Addy Osmani about Mediator pattern](http://addyosmani.com/resources/essentialjsdesignpatterns/book/#mediatorpatternjavascript)

---

setTimeout
----------

``` javascript
function doSomethingLater() {

}
setTimeout(doSomethingLater, 100);
```

---

setTimeout with currying
----------

``` javascript
var message = document.querySelectorAll();

function hideElement(element) {
    element.style.display = 'none';
}

setTimeout(
    curry(hideElement, message),
    100
);
```

---

setInterval
----------

``` javascript
var token = setInterval(myPeriodicFunc, 100);
clearTimeout(token);
```

<p class="alert warn">setInterval is (moderately) evil</p>

* No guarantee of execution
* You MUST keep track of token

``` javascript
var token = setInterval(myPeriodicFunc, 100);
clearTimeout(token);
```

---

DOM event model
---------------

``` javascript
document.body.addEventListener('click', handleClick);

function handleClick (event) {
    // prevent default behavior
    event.preventDefault();
    // Stop bubbling
    event.stopPropagation();
}
```
<!-- .element: class="alert info" --> Event model follows Observable pattern:


---

Event delegation
----------------

<div class="two-columns">
<div style="width: 30%;">
<pre><code class="html" style="font-size: 1.1em">&lt;ul id="parent-list">
  &lt;li id="post-1">
    Item 1
  &lt;/li>
  &lt;li id="post-2">
    Item 2
  &lt;/li>
  &lt;li id="post-3">
    Item 3
  &lt;/li>
&lt;/ul>
</code></pre>
</div>
<div style="width: 66%">
<pre><code class="javascript"  style="font-size: 1.1em">document
    .getElementById("parent-list")
    .addEventListener("click",function(e) {
    // e.target is the clicked element!
    // If it was a list item
    if(e.target &&
    e.target.nodeName == "LI") {
        console.log(
            e.target.id.replace("post-"),
        );
    }
});
</code></pre>
</div>
</div>

<!-- .element: class="alert info" --> It means only one element listens to all
events

---

WebSocket
---------

Real time communication through server push.

[html5rocks](http://www.html5rocks.com/en/tutorials/websockets/basics/) <!-- .element: class="icontext doc" -->

---

WebSocket
---------

```
var connection = new WebSocket('ws://mydomain.ext/echo',
                    ['soap', 'xmpp']);
// When the connection is open, send some
// data to the server
connection.onopen = function () {
    // Send the message 'Ping' to the server
    connection.send('Ping');
};
// Log errors
connection.onerror = function (error) {
    console.log('WebSocket Error ' + error);
};
// Log messages from the server
connection.onmessage = function (e) {
      console.log('Server: ' + e.data); };
```

---

XMLHttpRequest / Ajax
--------------

[Slides](http://themouette.github.io/presentation-apihours-ajax-from-scratch/)

---

Same-origin policy
------------------

For user security, browser runs in a sandbox based on url: <!-- .element: class="alert" -->

* protocol
* domain
* port

<p class="alert">
Applies to XMLHttpRequest, DOM, and
[others](https://code.google.com/p/browsersec/wiki/Part2#Same-origin_policy)...
</p>

<p class="alert">
[Wikipedia on SOP](http://en.wikipedia.org/wiki/Same-origin_policy) <!-- .element: class="icontext doc" -->
</p>

---

CSP
---

[content security policy](http://www.w3.org/TR/CSP/) defines sources from which
javascript will be allowed to run through header.

```
Content-Security-Policy
X-Content-Security-Policy   // IE >= 10, Gecko 2
X-WebKit-CSP                // webkit
```

<p class="alert">
[Wikipedia on CSP](http://en.wikipedia.org/wiki/Content_Security_Policy) <!-- .element: class="icontext doc" -->
And
[HTML5rocks](http://www.html5rocks.com/en/tutorials/security/content-security-policy/) <!-- .element: class="icontext doc" -->
</p>

Note:

des headers pour controler l'exécution du js et autres
js principalement

ça permet par exemple de désactiver tout js inline

---

CORS
----

> [Cross-Origin Resource Sharing](http://www.w3.org/TR/cors/) is all about
> bypassing the **Same-origin policy**

<p class="alert">
[Wikipedia on CORS](http://en.wikipedia.org/wiki/Cross-Origin_Resource_Sharing) <!-- .element: class="icontext doc" -->
And
[HTML5rocks](http://www.html5rocks.com/en/tutorials/cors/) <!-- .element: class="icontext doc" -->
</p>

---

CORS
----

![](img/03/cors.png)

<p class="fragment alert info">
Requested endpoint should accept<br />
Browser refuse to send data otherwise
</p>


Note:
si qq1 veux utiliser un browser pour usurper l'identité, il doit le faire depuis
ton domaine, sinon le site browser refuse.

ca garantit que pour attaquer tes données, il faut attaquer ton site (XSS).

---

CORS
----

1. Browser sends an `OPTION` request with **Origin** header

    ```
    Origin: http://www.example-social-network.com
    ```

2. Server return authorization in response header

    ```
    Access-Control-Allow-Credentials: true
    ```

3. Browser sends request if authorized

---

CORS
----

![](img/03/cors_flow.png)

[source](http://www.html5rocks.com/en/tutorials/cors/#toc-adding-cors-support-to-the-server)

---

CORS: crossbrowser
----

``` javascript
var xhr = new XMLHttpRequest();
if ("withCredentials" in xhr) {
    // "withCredentials" only exists on
    // XMLHTTPRequest2 objects.
    xhr.open(method, url, true);
} else if (typeof XDomainRequest != "undefined") {
    // XDomainRequest is IE's way of making CORS requests.
    xhr = new XDomainRequest();
    xhr.open(method, url);
} else {
    // Otherwise, CORS is not supported by the browser.
    throw new Error('CORS not supported');
}
// send cookies ?
xhr.withCredentials = true;
```

---

PostMessage
-----------

DOM cross domain communication.

[MDN reference](https://developer.mozilla.org/fr/docs/Web/API/Window.postMessage)

---

Async rabbit holes
------------------

* No try/catch
* Spaghetti code
* pyramid of death

[Going further on communication](http://blog.millermedeiros.com/callbacks-promises-signals-and-events/)

[JS the right way](http://jstherightway.org/)

