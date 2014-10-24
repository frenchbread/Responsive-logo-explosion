$(document).ready(function(){
    var main = $('#main');
    var fake = $('.fakeLI');
    var fade = $('.fadingOut');
    response();

    $(window)
        .scroll(function(){ move(); })
        .resize(function(){ response(); });

    function response(){
        var win = $(window);
        var winX = win.width();
        var winY = fake.height() * winX / fake.width();
        var scroll = window.scrollY;
        var koeff = fake.height()/20;
        var thisFrame = scroll/koeff;
        var position = winY * Math.round(thisFrame);
        position = Math.round(position);
        console.log(Math.round(thisFrame));
        if(winX < 1184){
            main.css({'background-size': winX + 'px auto', 'background-position-y': -position});
            fake.css({ 'width': winX+'px' , 'height': winY+'px'});
        }
        var koeff2 = fake.height()/10;
        var fr = scroll/koeff2;
        fr = fr/10;
        fade.css('opacity', fr);
        return false;
    }
    function move(){
        var scroll = window.scrollY;
        if(scroll<0){ main.css({'background-position-y': 0 + "px"}); fade.css('opacity', 0) }else{
            if(scroll<fake.height()){
                var koeff = fake.height()/20;
                var thisFrame = scroll/koeff;
                thisFrame = Math.round(thisFrame);
                var position = fake.height() * thisFrame;
                main.css('background-position-y',  -position+ 'px');
                // ----- fading out
                var startingFadePoint = 100;
                if(scroll>startingFadePoint){
                    var koeff2 = (fake.height()-startingFadePoint)/10;
                    var fr = (scroll-startingFadePoint)/koeff2;
                    fr = fr/10;
                    fade.css('opacity', fr);
                }else{
                    fade.css('opacity', 0);
                }
            }
        }
    }
});
