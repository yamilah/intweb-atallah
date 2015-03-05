$(document).ready(function() {
    $("#submit").click(function() {
        var failure = false;

        var fname = $("input[name=fname]");

        if (fname.val().length <= 2) {
            fname.addClass("error");
            failure = true;
        }

        var lname = $("input[name=lname]");

        if (lname.val().length <= 2) {
            lname.addClass("error");
            failure = true;
        }

        var email = $("input[name=email]");

        // Regular expression found in http://stackoverflow.com/questions/46155/validate-email-address-in-javascript.
        if (!email.val().match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
            email.addClass("error");
            failure = true;
        }

        var uname = $("input[name=uname]");

        if (uname.val().length <= 7) {
            uname.addClass("error");
            failure = true;
        }

        var pass = $("input[name=pass]");

        if (pass.val().length <= 8 || !pass.val().match(/\d+/)) {
            pass.addClass("error");
            failure = true;
        }

        var vpass = $("input[name=vpass]");

        if (vpass.val() !== pass.val()) {
            vpass.addClass("error");
            failure = true;
        }

        var color = $("input[name=fcolor]");
        var foundColor = null;

        for (var colorIndex = 0; colorIndex < color.length; colorIndex++) {
            if (color[colorIndex].checked) {
                foundColor = color[colorIndex].value;
            }
        }
        if (foundColor === null) {
            var colorLabel = $("#color-label");

            colorLabel.addClass("error");
            failure = true;
        }

        if (!failure) {
            document.body.style.backgroundColor = "#" + foundColor;
        }
        return false;
    });

    $("reset").click(function() {    
        var response = confirm("Are you sure you want to clear? This will clear all of your fields.");

        if (response) {
            var list = $(".fields");

            for (var listIndex = 0; listIndex < list.length; listIndex++) {
                list[listIndex].val() = "#" + foundColor;
            }
        }

        return false;
    });
});
