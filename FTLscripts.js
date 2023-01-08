function topFunction() {
 
     $('html, body').animate({scrollTop:0}, 'fast');
}

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("topButton").style.display = "block";
    } else {
        document.getElementById("topButton").style.display = "none";
    }
   
}

window.onscroll = function() {scrollFunction()};