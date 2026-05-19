const quotes = [
  {
    quote: "No pain, no gain",
    author: "Benjamin Franklin",
  },
  {
    quote: "Seize the day.",
    author: "Horace",
  },
  {
    quote: "Love yourself.",
    author: "Anonymous",
  },
  {
    quote: "Be yourself.",
    author: "Oscar Wilde",
  },
  {
    quote: "Stay hungry, stay foolish.",
    author: "Whole Earth Catalog",
  },
  {
    quote: "Time is money.",
    author: "Benjamin Franklin",
  },
  {
    quote: "Dream big.",
    author: "Anonymous",
  },
  {
    quote: "Never give up.",
    author: "Winston Churchill",
  },
  {
    quote: "Focus on the good.",
    author: "Anonymous",
  },
  {
    quote: "Just do it.",
    author: "Nike",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
