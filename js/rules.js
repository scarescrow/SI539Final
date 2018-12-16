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
    $('html,body').animate({ scrollTop: 0 }, 'slow');
    return false; 
}

$(function() {
    // Implement flip
    $('.piece-card').flip();
    $('.piece-card').focusin(function() {
        $(this).flip(true);
    });
    $('.piece-card').focusout(function() {
        $(this).flip(false);
    });
    $('#scrollButton').focusin(function() {
        $(this).css('border', '3px solid #fff');
    });
    $('#scrollButton').focusout(function() {
        $(this).css('border', 'none');
    });
});