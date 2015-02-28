document.getElementById("submit").onclick = function() {    
    var fname = document.getElementsByName("fname")[0];
    
    if (fname.value.length <= 2) {
        fname.classList.add("error");
    }
    
    var lname = document.getElementsByName("lname")[0];
    
    if (lname.value.length <= 2) {
        lname.classList.add("error");
    }
    
    /*var email = document.getElementsByName("email")[0];
    
    if (fname.value.length <= 2) {
        fname.classList.add("error");
    }*/
    
    var uname = document.getElementsByName("uname")[0];
    
    if (uname.value.length <= 7) {
        uname.classList.add("error");
    }
    
    var pass = document.getElementsByName("pass")[0];
    
    if (pass.value.length <= 8 || !pass.value.match(/\d+/)) {
        pass.classList.add("error");
    }
    
    /*var vpass = document.getElementsByName("vpass")[0];
    
    if (vpass.value.length <= 2) {
        vpass.classList.add("error");
    }
    
    var color = document.getElementsByName("fname")[0];
    
    if (fname.value.length <= 2) {
        fname.classList.add("error");
    }*/
    
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
