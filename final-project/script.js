$(document).ready(function() {
    $("#cross").click(function() {
        $("#create-menu").removeClass("hidden");
    });

    $("#ok").click(function() {
        $("#create-menu").addClass("hidden");
    });

    $("#cancel").click(function() {
        $("#create-menu").addClass("hidden");
    });
});
