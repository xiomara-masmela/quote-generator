"use strict";

//From: https://dev.to/nehasoni__/random-quote-generator-using-html-css-and-javascript-3gbp

const quoteDiv = document.getElementById('text');
const authorDiv = document.getElementById('author');

const buton = document.getElementById('new-quote')
const newQuote = async () => {
    const api = "https://type.fit/api/quotes";
    const response = await fetch(api);
    const quotes = await response.json();
    let randomI = Math.floor(Math.random() * (quotes.length));

    const quote = quotes[randomI].text;
    const auth = quotes[randomI].author;


    if(auth == null) {
        author = "Anonymous";
    }

    quoteDiv.innerText = quote;
    authorDiv.innerText = auth;

}
buton.addEventListener('click', newQuote)

 

