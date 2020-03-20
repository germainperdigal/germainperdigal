$(function() {
    setHero();
});

window.onresize = setHero;

function setHero() {
    var height = $(window).height() - 20;
    let heroHeight = height - $('header').height();
    $('.hero').height(heroHeight);
    $('.shadow').height($('.avatar').height());
    let workHeight = $('.heading').height();
    $('.work').height((height - workHeight - 100) / 2);
    //$('.skill').height(height - workHeight - 40);
    $('.flex').height(height - workHeight);
    $('.mid').height((height - workHeight) / 2);
}

function scrollDown() {
    $('html, body')
        .animate({
            scrollTop: $(window).height()
        }, 'slow', 'swing', function() {});
}