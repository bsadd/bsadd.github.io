$(document).ready(function(){
    $('#sidebar').affix({
      offset: {
        top: 240
      }
    });

    $('a').click(function(){
        var href = $(this).attr('href');
        ga('send', 'event', 'linkclick', 'href', href);
    });
});
