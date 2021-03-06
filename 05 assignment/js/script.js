document.getElementById("submit").onclick = function() {
    var failure = false;
    
    var fname = document.getElementsByName("fname")[0];
    
    if (fname.value.length <= 2) {
        fname.classList.add("error");
        failure = true;
    }
    
    var lname = document.getElementsByName("lname")[0];
    
    if (lname.value.length <= 2) {
        lname.classList.add("error");
        failure = true;
    }
    
    var email = document.getElementsByName("email")[0];
    
    // Regular expression found in http://stackoverflow.com/questions/46155/validate-email-address-in-javascript.
    if (!email.value.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
        email.classList.add("error");
        failure = true;
    }
    
    var uname = document.getElementsByName("uname")[0];
    
    if (uname.value.length <= 7) {
        uname.classList.add("error");
        failure = true;
    }
    
    var pass = document.getElementsByName("pass")[0];
    
    if (pass.value.length <= 8 || !pass.value.match(/\d+/)) {
        pass.classList.add("error");
        failure = true;
    }
    
    var vpass = document.getElementsByName("vpass")[0];
    
    if (vpass.value !== pass.value) {
        vpass.classList.add("error");
        failure = true;
    }
    
    var color = document.getElementsByName("fcolor");
    var foundColor = null;
    
    for (var colorIndex = 0; colorIndex < color.length; colorIndex++) {
        if (color[colorIndex].checked) {
            foundColor = color[colorIndex].value;
        }
    }
    if (foundColor === null) {
        var colorLabel = document.getElementById("color-label");
        
        colorLabel.classList.add("error");
        failure = true;
    }
    
    if (!failure) {
        document.body.style.backgroundColor = "#" + foundColor;
    }
    return false;
};

document.getElementById("reset").onclick = function() {    
    var response = confirm("Are you sure you want to clear? This will clear all of your fields.");
    
    if (response) {
        var list = document.getElementsByClassName("fields");
        
        for (var listIndex = 0; listIndex < list.length; listIndex++) {
            list[listIndex].value = "";
        }
    }
    
    return false;
};
