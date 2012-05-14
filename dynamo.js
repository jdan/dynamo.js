(function($) {

    $.fn.dynamo = function() {

        return this.each(function(i, v) {
            var el = v;
            var delay = parseInt(el.attr('data-delay')) || 3000;
            var speed = parseInt(el.attr('data-speed')) || 350;

            var lines = el.attr('data-lines').split(',');

            // wrap the original contents in a span
            el.html($('<span></span>').text(el.text()));

            // grab the width of the span
            var max = el.find('span:eq(0)').width();

            // for each item in data-lines, create a span with item as its content
            // compare the width of this span with the max
            for (var k in lines) {
                var span = $('<span></span>').text(lines[k]);
                el.append(span);
                max = Math.max(max, el.width());
            }

            // replace all the spans with inline-div's
            el.find('span').each(function(i, ele) {
                var s = $(ele).remove();
                var d = $('<div></div>').text($(s).text());
                $(d).width(max);
                el.append(d);
            });

            // set the height of the dynamo container
            var height = el.find('>:first-child').height();

            // style
            el.width(max).height(height);
            el.css({
                'display' : 'inline-block',
                'position' : 'relative', 
                'overflow' : 'hidden', 
                'vertical-align' : 'bottom',
                'text-align' : 'left' 
            });

            // manually center it if we need to
            if (el.attr('data-center'))
                el.css('text-align', 'center');

            // now, animate it
            var transition = function() {
                el.find('div:first').slideUp(speed, function() { 
                    el.append($(this).remove().show());
                });
            };

            setInterval(transition, delay);
        });
    };
    
    // automatically initiate cycles on elements of class 'dynamo'
    $('.dynamo').dynamo();

})(jQuery);
