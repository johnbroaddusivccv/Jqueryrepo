$(document).ready(function() {
    $("#hidden").hover(function() {
        $(this).css("color", "black");
    },
    function() {
        $(this).hide(1000).show(300).hide(1000).show(300);
    });

    $("button").click(function() {
        alert("I'm alerting")
    })

});