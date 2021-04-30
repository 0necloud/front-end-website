"use strict";

/*

    FED CA2 - Applied AI and Analytics Training and Consultancy
    Author: Hew Yi Yun
    Date:   12 July 2020

    Filename: registration.js
    
*/

/*Execute Functions*/
// enableSubmission();
// stateOthers();
// attendChoice();

setInterval("attendChoice()", 1);
setInterval("enableSubmission()", 1);
setInterval("stateOthers()", 1);

/*Function to allow the selection with id of "attend" spawn different inputs based on what is selected*/

function attendChoice() {
    var j = document.getElementById("attend");
    if (j.value == "") {
        document.getElementById("wrapper2").style.display="none";
    }
    else if (j.value == "1") {
        document.getElementById("wrapper2").style.display="block";
        document.getElementById("wrapper3").style.display="block";
        document.getElementById("consultDetails").style.display="none";
    }
    else if (j.value == "2") {
        document.getElementById("wrapper2").style.display="block";
        document.getElementById("wrapper3").style.display="none";
        document.getElementById("consultDetails").style.display="block";
    }
    else if (j.value == "3") {
        document.getElementById("wrapper2").style.display="block";
        document.getElementById("consultDetails").style.display="block";
        document.getElementById("wrapper3").style.display="block";
    }
}

/*Function to allow the selection with id of "status" spawn a "specify others" input when option value 4, "Others", is selected*/

function stateOthers() {
    var x = document.getElementById("status");
    if (x.value == "4") {
        document.getElementById("status2").style.display = "block";
    } 
    else {
        document.getElementById("status2").style.display = "none";
    }
}

/*Function to enable submit button only when users check the final box with id "check"*/

function enableSubmission() {
    var y = document.getElementById("check");
    if (y.checked == true) {
        document.getElementById("submit").disabled = false;
    }
    else {
        document.getElementById("submit").disabled = true;
    }
}

