x = 0;  //horizontal coord
y = document.height; //vertical coord
window.scroll(x,y);


var pane = $('#pane'),
box = $('#box'),
wh = pane.width() - box.width(),
wv = pane.height() - box.height(),
d = {},
x = 5;

function newh(v,a,b) {
    var n = parseInt(v, 10) - (d[a] ? x : 0) + (d[b] ? x : 0);
    return n < 0 ? 0 : n > wh ? wh : n;
}

function newv(v,a,b) {
    var n = parseInt(v, 10) - (d[a] ? x : 0) + (d[b] ? x : 0);
    return n < 0 ? 0 : n > wv ? wv : n;
}

//left and right rotate
$(document).keydown(function(e){
    if (e.keyCode == 39) { 
		$("#box").css('background', 'url(rocketship-right.png)');
    }
	else if (e.keyCode == 37) { 
 		$("#box").css('background', 'url(rocketship-left.png)');
    }
	else {
		$("#box").css('background', 'url(rocketship.png)');
	}
});

$(window).keydown(function(e) { d[e.which] = true; });
$(window).keyup(function(e) { d[e.which] = false; });

setInterval(function() {
    box.css({
        left: function(i,v) { return newh(v, 37, 39); },
        bottom: function(i,v) { return newv(v, 0, 0); } //disabled down key 0 = 40
    });
    wh = pane.width() - box.width();
    wv = pane.height() - box.height();
}, 20);


//launchbutton launch and disappear
$('.scrollup').click(function(){
    $("html, body").animate({ scrollTop: 0 }, 6000);
    $(".scrollup").fadeOut(); 
});

//space bar launch and disappear
$(document).keydown(function(e){
    if (e.keyCode == 32) { 
	    $("html, body").animate({ scrollTop: 0 }, 6000);
	    $(".scrollup").fadeOut(); 
    }
});

