$(document).ready(function() {
    $("#alert-btn").click(function(){
        $("#alert").fadeOut();
    });

    $("#alert_two-btn").click(function() {
        $("#alert_two").addClass("fade");
    });
});