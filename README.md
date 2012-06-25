# Dynamo.js
*a dead-simple way to add dynamic bits of content to your webpage*

See it in action: http://jordanscales.com/dynamo/

### How does it work?
dynamo.js takes any portion of text and allows you to cycle through different content. Use it to add subtle effects to your webpage, or to make a particular section pop.

```
<p>I wish I could change one of these words.</p>
```

```
<p>I wish I could <span class="dynamo" data-lines="alter,edit,mutate,morph">change</span> one of these words.</p>
```

and activate it like so: (*this is done automatically for you if your include tag is at the end of `&lt;/body&gt;`, but you can use `.dynamo()` on any target</i>*)

```
<script type="text/javascript">
  $(function() {
    $('.dynamo').dynamo()
  });
</script>
```

### Options

* `data-lines`: the bits of content you want to cycle through (not including the original content)
* `data-speed`: the speed of the transition (*default: 350ms*)
* `data-delay`: the delay between transitions (*default: 3000ms*)
* `data-center`: center the text in the dynamo container (*default: false*)
* `data-delimiter`: change the character (or string) used to separate your bits of text (*default: ,*)

### Contributing

If you want to make a change to dynamo (the code is very small and very approachable!) please follow these steps

* fork it.
* commit your changes. (use proper git etiquette and work off a branch !!)
* submit a pull request.
* wait.

I'm pretty quick with responses, so I'll likely shoot you a comment as confirmation. As for minifying - don't worry about it, I'll take care of that. Thanks for showing interest!

### About
dynamo.js was inspired by a tagline rails app I had been working in the past, which gives you the ability to generate a random tagline on your webpage. 

---------------------------------------

&copy; 2012 [Jordan Scales](http://jordanscales.com) | MIT Licensed | See LICENSE.txt