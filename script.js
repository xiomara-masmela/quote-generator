"use strict";

let quotes = [
    "Life isn\'t about finding yourself. Life is about creating yourself.",
    "The most important thing is to enjoy your life - to be happy - it's all that matters.",
    "I have found that if you love life, life will love you back.",

]

let authors = [
    "George Bernard Shaw",
    "Audrey Hepburn",
    "Arthur Rubinstein"
]

let quoteText = " ";
let quoteAuthor = " ";


function newQuote() {
    let randomNumber = Math.floor(Math.random() * (quotes.length));
    quoteText = document.getElementById("text").innerHTML = quotes[randomNumber];
    quoteAuthor = document.getElementById("author").innerHTML = authors[randomNumber];

   
}

//Tweet Button
$(document).ready(function () {
    //your code here
    $("#tweet-quote").attr("href", "https://twitter.com/intent/tweet");
  });


