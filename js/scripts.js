$(document).ready(function(){
    $('#sidebar').affix({
      offset: {
        top: 240
      }
    });

    $('a').click(function(e, options){
        options = options || {};
        if(!options.autoclick){
            e.preventDefault();
            var href = $(this).attr('href');
            var component = this;
            ga('send', 'event', 'linkclick', 'href', {
                'href': href,
                'hitCallback': function() {
                    $(component).trigger('click', {autoclick: true});
                }
            });
        }
    });
});
