"use strict";

/*

   FED CA2 - Applied AI and Analytics Training and Consultancy
   Author: Hew Yi Yun
   Date:   12 July 2020

   Filename: countdown.js
    
*/

/* Execute the function to run and display the countdown clock */ 
runClock();
setInterval("runClock()", 1000);

/* Function to create and run the countdown clock */
function runClock() {

/* Store the current date and time */ 
var currentDay = new Date();


/* Calculate the days until September 30th */ 
var regEnd = new Date("September 30, 2020"); 
// var nextYear = currentDay.getFullYear() ; 
// regEnd.setFullYear(nextYear);  ////////////////////////////////////////////////////////////////////////////////////////
var daysLeft = (regEnd - currentDay)/(1000*60*60*24);

/* Calculate the hours left in the current day */ 
var hrsLeft = (daysLeft - Math.floor(daysLeft))*24;
var minsLeft = (hrsLeft - Math.floor(hrsLeft))*60;
var secsLeft = (minsLeft - Math.floor(minsLeft))*60;

var daysStr = addLeadingZero(Math.floor(daysLeft));
var hrsStr = addLeadingZero(Math.floor(hrsLeft));
var minsStr = addLeadingZero(Math.floor(minsLeft));
var secsStr = addLeadingZero(Math.floor(secsLeft));

/* Display the time left until Registration Ends */ 
document.getElementById("days").textContent = daysStr; 
document.getElementById("hrs").textContent = hrsStr; 
document.getElementById("mins").textContent = minsStr; 
document.getElementById("secs").textContent = secsStr;

}

/* The addLeadingZero() function adds a leading zero to values which are less than 10 */

function addLeadingZero(num) {
   var numStr = (num < 10) ? ("0" + num) : "" + num;
   return numStr;
}