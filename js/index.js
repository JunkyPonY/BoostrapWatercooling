function moveScroller() {
    var $anchor = $("#scroller-anchor");
    var $scroller = $('#scroller');

    var move = function() {
        var st = $(window).scrollTop();  //if 0 -> top of scrollbar
        var ot = $anchor.offset().top;  //offset to top
        if(st > ot) { //if we scrolled past the scroller
            $scroller.css({
                position: "fixed",
                top: "0px",
                margin: "0",
                left: '50%',
                transform: "translateX(-50%)",

            });
        } else {
            if(st <= ot) {
                $scroller.css({
                    position: "relative",
                    top: "",
                    left: "",
                    transform: "",
                });
            }
        }
    };
    $(window).scroll(move);
    move();
}