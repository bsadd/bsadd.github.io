$(document).ready(function(){
    $('#sidebar').affix({
      offset: {
        top: 240
      }
    });

    $('a').click(function(e){
        var href = $(this).attr('href');
        if(!href || href == '' || href == "#" ) {
            //do nothing
        }else if( href.startsWith('#') ) { //enqueu analytics command
            ga('send', {
                hitType: 'event',
                eventCategory: 'click',
                eventAction: 'ilinks',
                eventLabel: 'workplacereport'+href,
            });
        }else if( ! $(this).data('autoclick') ){ //external/internal link, block page navigation unless ga is tracked
            var component = this;
            $(this).data('autoclick' , true);
            e.preventDefault();
            ga('send', {
                hitType: 'event',
                eventCategory: 'click',
                eventAction: ( isExternalLink(href) ? 'elinks' : 'ilinks' ),
                eventLabel: href,
                hitCallback: function() {
                    $(component)[0].click();
                }
            });
        }

    });


    $('.photo-album').each(function(){
        $(this).lightGallery({
            download: false,
            galleryId: $(this).parent().attr('id')
        });
    });

    prepareDynamicJSContents();

});

function prepareDynamicJSContents(){
    $('.click-to-see-text').each(function(){
        var b64text = $(this).data('base64');
        var decoded = base64DecodingUTF8( b64text );
        $(this).data('plaintext' , decoded);

        $(this).addClass('blurred-content');
        $(this).text(decoded.replace(/[a-zA-Z0-9]/g , "o") );
    });
    $('.click-to-see-text').css('cursor' , 'pointer');
    $('.click-to-see-text').click(function(){
        $(this).removeClass('blurred-content');
        $(this).text( $(this).data('plaintext') );
    });
}


function scrollToElement( $element , time = 500, success ){ 
    $('html, body').animate({
        scrollTop: $element.offset().top
    }, time , success ); 
}

function scrollToSelector( selector, time = 500, success ){
    $('html, body').animate({
        scrollTop: $(selector).offset().top
    }, time , success );
}

function isExternalLink(link){
    return link.startsWith('http://')
        || link.startsWith('https://')
        || link.startsWith('www.')
    ;
}

$.urlParam = function(name){
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results==null){
       return null;
    }else{
       return results[1] || 0;
    }
};

function base64EncodingUTF8(str) {
    var encoded = new TextEncoderLite('utf-8').encode(str);
    var b64Encoded = base64js.fromByteArray(encoded);
    return b64Encoded;
}

function base64DecodingUTF8(encoded) {
    var b64Encoded = base64js.toByteArray(encoded);
    var str = new TextDecoder('utf-8').decode(b64Encoded);
    return str;
}
