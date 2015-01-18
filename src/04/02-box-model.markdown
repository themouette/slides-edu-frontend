# Box Model

---

# Box Model

![](img/04/box-model.png)

---

## Longhand Properties

``` css
padding-top: 5%;
padding-bottom: 5%;
padding-left: 10px;
padding-right: 10px;
```

---

<div class="two-columns">
    <pre><code class="css">
div {
   padding: 15%;
   height: 50px;

   border:1px solid #000;

   background-clip:content-box;
   background-color:chartreuse;
}
    </code></pre>
    <div class="text-align: left;">
        <div style="width: 33%"><div style="background-clip:content-box; background-color:chartreuse; padding:15%; height:50px; border:1px solid #000;"></div></div><br>
        <div style="width: 66%"><div style="background-clip:content-box; background-color:chartreuse; padding:15%; height:50px; border:1px solid #000;"></div></div><br>
        <div style="width: 100%"><div style="background-clip:content-box; background-color:chartreuse; padding:15%; height:50px; border:1px solid #000;"></div></div><br>
    </div>
</div>

<div class="alert warn fragment">
    Percentage values refer to the element **container**'s width !
</div>

---

## Shorthand Properties

``` css
padding: 5%;               /* on all sides 5% padding */
```

``` css
padding: 10px;             /* on all sides 10px padding */
```

---

## Shorthand Properties

``` css
padding: 10px 20px;         /*  top and bottom 10px padding  */
                            /*  left and right 20px padding  */
```

---

## Shorthand Properties

``` css
padding: 10px 3% 20px;      /*  top 10px padding          */
                            /*  left and right 3% padding */
                            /*  bottom 20px padding       */
```

---

## Shorthand Properties

``` css
padding: 1em 3px 30px 5px;  /*  top    1em  padding  */
                            /*  right  3px  padding  */
                            /*  bottom 30px padding  */
                            /*  left   5px  padding  */
```

---

## Box-sizing

Alter the default CSS box model used to calculate widths and heights of
elements:

* box-sizing: **content-box** (default style)
* box-sizing: **border-box**
* box-sizing: **inherit**

<div class="alert info" style="margin-top: 2em;">
    <a class="icontext doc" href="https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing">See
the spec</a>
</div>

<p class="fragment" style="padding-top: 2em;">
Mozilla tries to push `padding-box`.
</p>
