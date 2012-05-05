/*
Copyright (c) 2012 Jordan Scales ( http://jordanscales.com/ )

Permission is hereby granted, free of charge, to any person obtaining a
copy of this software and associated documentation files (the "Software"),
to deal in the Software without restriction, including without limitation
the rights to use, copy, modify, merge, publish, distribute, sublicense,
and/or sell copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
DEALINGS IN THE SOFTWARE.
*/

(function($) {
    
    var defaults = {
        delay: 3000,
        speed: 350
    };
    
    $.fn.dynamo = function() {

        return this.each(function(i, v) {
            var options =  $.extend(defaults, { delay: $(v).attr('data-delay'),
                                                speed: $(v).attr('data-speed') });
                                                
            var lines = $(v).attr('data-lines').split(',');
            
            // wrap the original contents in a span
            $(v).html($('<span></span>').text($(v).text()));
            
            // grab the width of the span
            var max = $(v).find('span:eq(0)').width();
            
            // for each item in data-lines, create a span with item as its content
            // compare the width of this span with the max
            for (var k in lines) {
                var span = $('<span></span>').text(lines[k]);
                $(v).append(span);
                max = Math.max(max, $(span).width());
            }
            
            // replace all the spans with inline-div's
            $(v).find('span').each(function(i, el) {
                var s = $(el).remove();
                var d = $('<div></div>').text($(s).text());
                $(d).width(max);
                $(v).append(d);
            });
            
            // set the height of the dynamo container
            var height = $(v).find('>:first-child').height();
            
            // style
            $(v).width(max).height(height);
            $(v).css({
                'display' : 'inline-block',
                'position' : 'relative', 
                'overflow' : 'hidden', 
                'vertical-align' : 'bottom',
                'text-align' : 'left' 
            });
        
            // now, animate it
            var transition = function() {
                $(v).find('div:first').delay(parseInt(options.delay))
                                      .slideUp(parseInt(options.speed), function() { 
                    $(v).append($(this).remove().show());
                    transition(); // just a hack while setTransition doesn't play nice
                });
            };
            
            transition();
        });
    };
    
})(jQuery);