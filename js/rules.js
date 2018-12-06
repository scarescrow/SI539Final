// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("scrollButton").style.display = "block";
        document.getElementById("scrollButton").classList.add('animation-target')
    } else {
        document.getElementById("scrollButton").style.display = "none";
        document.getElementById("scrollButton").classList.remove('animation-target')
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}