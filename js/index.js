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

function slide() {
    var p=1;
    var slide1;
    var slide2;
    document.getElementById("slide1").style["left"] = "0";
    document.getElementById("slide2").style["left"] = "100vw";
    document.getElementById("slide3").style["left"] = "200vw";

    $("#slidenext").click(function() {

        if ( p < 3) {
            $("#slide1").animate({ left: "-=100vw" });
            $("#slide2").animate({ left: "-=100vw" });
            $("#slide3").animate({ left: "-=100vw" });
            p++;

            if (p == 3) {
                $("#slidenext").css("background-color", "#10131a");
            }
            $("#slideprev").css("background-color", "#00D054");
        }


    });


    $("#slideprev").click(function() {
        
        if (p > 1) {
            $("#slide1").animate({ left: "+=100vw" });
            $("#slide2").animate({ left: "+=100vw" });
            $("#slide3").animate({ left: "+=100vw" });
            p--;

            if (p == 1) {
                $("#slideprev").css("background-color", "#10131a");
            }
            $("#slidenext").css("background-color", "#00D054");
        }

    });
}