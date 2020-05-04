/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
let quotes = [
  {
    quote: "If I could say it in words there would be no reason to paint.",
    source: "Edward Hopper"
  },
  {
    quote: "Play by the rules, but be ferocious.",
    source: "Phil Knight"
  },
  {
    quote: "There's no way around hard work. Embrace it.",
    source: "Roger Federer",
    citation: "Lessons from the court",
    year: 2013
  },
  {
    quote: "It is extremely difficult to stay alert and attentive instead of getting hypnotized by the constant monolog inside your head.",
    source: "Davis Foster Wallace",
    citation: "This is water speech",
    year: 2005
  },
  {
    quote: "Ideas are like fish. If you want to catch little fish, you can stay in the shallow water. But if you want to catch the big fish, you've got to go deeper. Down deep, the fish are more powerful and more pure. They're huge and abstract. And they're very beautiful.",
    source: "David Lynch",
    citation:  "Catching the Big Fish: Meditation, Consciousness, and Creativity",
    year: 2006
  },
  {
    quote: "As soon as you start talking about mistique, you have none.",
    source: "Neil Young"
  },
  {
    quote: "For me it's all about performance. Nothing good happens in the world by being happy and cosy. Nobody achieves anything great because they're happy and cosy.",
    source: "Alex Honnold",
    citation: "Free solo",
    year: 2017
  },
  {
    quote: "Choose your habits well. Habit is probably the most powerful tool in your brain's toolbox.",
    source: "Ray Dalio",
    citation: "Principles",
    year: 2017
  }
];
 

/***
 * `getRandomQuote` function
***/
function getRandomQuote(){
  let randomQuote = Math.floor(Math.random() * quotes.length) + 1;
  return randomQuote;
}

/***
 * getRandomColor function
 **/
function getRandomColor(){
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  let colors = `rgba(${red},${green},${blue})`;
  return colors;
}
console.log(getRandomColor());

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);