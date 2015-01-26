

$.stellar();

$(function() {

    var $window = $(window);
    var scrollTime = 0.5;
    var scrollDistance = 170;

    $window.on("mousewheel DOMMouseScroll", function(event) {

        event.preventDefault();

        var delta = event.originalEvent.wheelDelta / 120 || -event.originalEvent.detail / 3;
        var scrollTop = $window.scrollTop();
        var finalScroll = scrollTop - parseInt(delta * scrollDistance);

        TweenMax.to($window, scrollTime, {
            scrollTo: {
                y: finalScroll,
                autoKill: true
            },
            ease: Power1.easeOut,
            overwrite: 5
        });

    });
});

function onScroll(event) {
    var scrollPos = $(document).scrollTop();
    $('.pager a').each(function() {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('.pager a').removeClass("active");
            currLink.addClass("active");
        } else {
            currLink.removeClass("active");
        }
    });
}
$(document).ready(function() {
    $(document).on("scroll", onScroll);
})
$(function() {
  $("#slides").snapscroll();
});
