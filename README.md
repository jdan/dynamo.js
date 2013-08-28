# Dynamo.js
*a dead-simple way to add dynamic bits of content to your webpage*

[![build status](https://travis-ci.org/jdan/dynamo.js.png)](https://travis-ci.org/jdan/dynamo.js)

See it in action: http://jdan.github.com/dynamo.js/

### How does it work?
dynamo.js takes any portion of text and allows you to cycle through different content. Use it to add subtle effects to your webpage, or to make a particular section pop.

```
<p>I wish I could change one of these words.</p>
```

```
<p>I wish I could <span class="dynamo" data-lines="alter,edit,mutate,morph">change</span> one of these words.</p>
```

and activate it like so: (<i>this is done automatically for you if your include tag is at the end of </i>`</body>`<i>, but you can use </i>`.dynamo()`<i> on any target</i>)

```
<script type="text/javascript">
  $(function() {
    $('.dynamo').dynamo()
  });
</script>
```

### Manual Firing

By default, dynamo.js will transition elements with a period specified by `data-delay`. If you wish to fire off a transition manually (only once), you may do so with `$('#mytarget').dynamo_trigger()`. Combine with a `data-pause="true"` property to create truly manual dynamo elements.

### Options

**Using data attributes:**

* `data-lines`: the bits of content you want to cycle through (not including the original content)
* `data-speed`: the speed of the transition (*default: 350ms*)
* `data-delay`: the delay between transitions (*default: 3000ms*)
* `data-center`: center the text in the dynamo container (*default: false*)
* `data-delimiter`: change the character (or string) used to separate your bits of text (*default: ,*)
* `data-pause`: sets up the dynamo, but does not automatically transition (*default: false*)
* `data-callback`: a function to be called each time the dynamo container completes a full cycle

**Using an options hash:**

Alternatively, you can pass an options hash - which takes precedence over data attributes - when calling `.dynamo()` like so.

    $('#mytarget').dynamo({
        speed: 100,
        delay: 1000,
        lines: ['next text', 'after that', 'even later'],
        callback: function() { console.log('All items have been shown') }
    });

**IMPORTANT:** Since dynamo automatically initializes DOM elements with class `.dynamo`, you will not be able to pass options to these elements (data attributes will still work, though). This is because dynamo prevents the user from initializing a dynamo container more than once.

### Contributing

If you want to make a change to dynamo (the code is very small and very approachable!) please follow these steps:

* Install the development dependencies (`npm install`)
* Checkout a feature branch (`git checkout -b feature/something-cool`)
* Test your changes (`npm test`)
* Commit your changes
* Push your changes (`git push origin feature/something-cool`)
* Open a pull request

I'm pretty quick with responses, so I'll likely shoot you a comment as confirmation. As for minifying - don't worry about it, I'll take care of that. Thanks for showing interest!

### About
dynamo.js was inspired by a tagline rails app I had been working in the past, which gives you the ability to generate a random tagline on your webpage.

---------------------------------------

&copy; 2013 [Jordan Scales](http://jordanscales.com) | MIT Licensed | See LICENSE.txt
