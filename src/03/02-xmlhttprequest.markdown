AJAX
====

---

## History

* **1998**: XMLHttpRequest ActiveX introduced by Microsoft
* **2002**: Introduced in ECMAScript specifications
* **2002-2005**: implemented in major browsers
* **2005**: AJAX first introduced by `Jesse James Garrett`

---

## What is AJAX?

> **A**synchronous **J**ava**S**cript and **X**ML

### ECMAScript HTTP API

Request data from server without page reload

### Javascript To Request Data

`XMLHttpRequest` object.

### Normalize Communications

`XML` or `JSON` formatted.

---

## Typical Call

<div class="diagram" style=""> Browser->Server: Asks a page
Note Right of Server: Compute the page
Server->Browser: Returns HTML
Note Left of Browser: User interacts\nwith the page
Browser-->Server: Asks for data
Note Right of Server: Looks for data
Server-->Browser: returns data in JSON, XML...
Note Left of Browser: Data are processed\nthrough callback</div>

---

## XMLHttpRequest

<a class="icontext doc"
href="https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest">
MDN XMLHttpRequest
</a>

---

### Can Be Synchronous Or Asynchronous

Yes Indeed...

### Single Object For Request and Response

* Methods;
* Public properties;
* Event handlers.

### Implementation Evolved Over The Years.

* Use new stuff if you know your customers;
* Use a library to deal with a single API.

---

## Cross browser creation

 <!-- .slide: class="small-code" -->

``` javascript
function createXhrObject() {
    if (window.XMLHttpRequest)
        return new XMLHttpRequest();

    if (window.ActiveXObject) {
        var names = [
            "Msxml2.XMLHTTP.6.0", "Msxml2.XMLHTTP.3.0",
            "Msxml2.XMLHTTP", "Microsoft.XMLHTTP"
        ];
        for(var i in names) {
            try{ return new ActiveXObject(names[i]); }
            catch(e){}
        }
    }
    window.alert("XMLHTTPRequest isn't supported.");
    return null;
}
xhr = createXhrObject();
```

---

## XMLHttpRequest: Request

### Prepare

``` javascript
void open(method, url, async = true,
            user = null, password = null);
```

``` javascript
void setRequestHeader(ByteString header,
            ByteString value);
```

### Send

``` javascript
void send(data = null);
```

### Abort

``` javascript
void abort();
```

---

## XMLHttpRequest: Response

### Read status

* `status`: response HTTP status
* `statusText`: Human readable HTTP status

### Access server response

* [`response`](http://www.w3.org/TR/XMLHttpRequest/#dom-xmlhttprequest-response): depends of content type
* `responseText`: raw response
* `responseXML`: Only for XML responses

### Response headers

* `string getResponseHeader(headerName);`
* `string getAllResponseHeaders();`

---

## Event driven: Old way

> A single event: `onreadystatechange` is called multiple times.

* `xhr.UNSENT = 0`
* `xhr.OPENED = 1`
* `xhr.HEADERS_RECEIVED = 2`
* `xhr.LOADING = 3`
* `xhr.DONE = 4`

---

 <!-- .slide: class="small-code" -->

## Sample usage

``` javascript
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
    switch (this.readyState) {
        case this.LOADING:
            // Use this for long polling
            break;

        case this.DONE:
            if (/^2/.test(this.status)) {
                // success
            } else {
                // failure
            }
    }
}

xhr.open('GET', 'http://example.org/ressources/1');
xhr.send();
```

---

## Event driven: New way

Since `XMLHttpRequest Level 2`, 25 February 2008

<div class="alert info">
Attach event listeners through `addEventListener(name, callback);`
</div>

* `loadstart`: When the request starts.
* `progress`: While sending and loading data.
* `abort`: When the request has been aborted. For instance, by invoking the abort() method.
* `error`: When the request has failed, **based on network, not status code**.
* `load`: When the request has successfully completed.
* `timeout`: When the author specified timeout has passed before the request could complete.
* `loadend`: When the request has completed (either in success or failure).

---

<!-- .slide: class="small-code" -->

## Sample usage

``` javascript
var xhr = new XMLHttpRequest();
xhr.addEventListener('load', function () {
    if (/^2/.test(xhr.status)) {
        // success
    } else {
        // failure
    }
}
xhr.addEventListener('error', function () {
    // something went wrong
}
xhr.addEventListener('progress', function () {
    // Use for long polling
}

xhr.open('GET', 'http://example.org/ressources/1');
xhr.send();
```
