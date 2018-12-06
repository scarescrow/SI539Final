$(function() {
    $('.player_div').hover (function() {
        $(this).children(".player_desc").css("visibility", "visible")
    }, function() {
        $(this).children(".player_desc").css("visibility", "hidden");
    });
    $('.player_div').focus(function(e) {
        console.log($(this).attr('class'));
        $(this).children(".player_desc").css("visibility", "visible");
    }); 
    $('.player_div').blur(function(e) {
        $(this).children(".player_desc").css("visibility", "hidden");
    })
});