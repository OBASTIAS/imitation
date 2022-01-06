$(document).ready(function() {
    $("#first_btn").click(function(){
        $("#collapseOne").fadeToggle("show");
        $("#collapseTwo").fadeOut();
        $("#collapseThree").fadeOut();
    });
    $("#second_btn").click(function(){
        $("#collapseTwo").fadeToggle("show");
        $("#collapseOne").fadeOut();
        $("#collapseThree").fadeOut();
    });
    $("#third_btn").click(function(){
        $("#collapseThree").fadeToggle("show");
        $("#collapseOne").fadeOut();
        $("#collapseTwo").fadeOut();
    });
});