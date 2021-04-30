"use strict";

/*

    FED CA2 - Applied AI and Analytics Training and Consultancy
    Author: Hew Yi Yun
    Date:   12 July 2020

    Filename: reviews.js
    
*/

var review = ["<blockquote>Jessica Tan (23) : Thanks to CYTEX's AI and Analytics training, I have learnt how to make use of data and AI to predict changes in my businesses' profits.</blockquote>","<blockquote>Zhang Jia Wen (16) : Members of CYTEX came to my school to teach us about Artificial Intelligence. This has developed interest in me and me and my friends wish to learn more.</blockquote>","<blockquote>Pranav Balasubramaniam (18) : I had little knowledge on Artificial Intelligence at first but thanks to CYTEX's trainings, I have a better understanding of AI</blockquote>","<blockquote>Joseph Goh (20) : I attended both the training and consultation. The training was fun as there were demonstrations of AI and during the consultation, the staff were patient in answering my questions.</blockquote>"];
var text = "<h1><u>Reviews</u></h1><br>";
var i;
for (i = 0; i < review.length; i++) {
  text += review[i] + "<br>";
}
document.getElementById("reviews").innerHTML = text;

/* When Adding Reviews, append the following to the "review" array:

,"<blockquote>Name (Age) : Review </blockquote>"

*/