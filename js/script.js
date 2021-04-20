/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/*** 
 * `quotes` array 
***/

// Create a variable named quotes and set it equal to an empty array.
// I am following some untypical approach here: First I declare my array, and push empty objects into it. Later I add values with bracket syntax.
let quotes = [];

// Add five empty objects to your quotes array.
for (i = 0; i < 5; i++){
quotes.push([{}]);
}

/*** Add the following properties to each quote object:
quote - string - the actual quote
source - string - the person or character who said it
***/
quotes[0].quote = "Be yourself; everyone else is already taken.";
quotes[0].source = "Oscar Wilde";

quotes[1].quote = "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.";
quotes[1].source = "Albert Einstein";

quotes[2].quote = "So many books, so little time.";
quotes[2].source = "Frank Zappa";

quotes[3].quote = "D`oh!";
quotes[3].source = "Homer Simpson";

quotes[4].quote = "This bat is already perfectly cooked";
quotes[4].source = "Unknown";

// Add a citation property to at least one quote object. The value should be a string holding a reference to the source of the quote, like the book, movie or song where the quote originates.
quotes[3].citation = "The Simpsons";

// Add a year property to at least one quote object. The value should be a string or number representing the year the quote originated.
quotes[4].year = "2019";

// Add a tag
quotes[0].tag = "Motivational";

/***
 * `getRandomQuote` function
***/

function getRandomQuote(){
  // Create random number to pick quote
  var rnd = Math.floor(Math.random() * quotes.length);
  return quotes[rnd];
}


/***
 * `printQuote` function
***/

let autoGenerate = false;

function printQuote(){
  quoteObject = getRandomQuote();
  quoteHTML = `<p class="quote"> ${quoteObject.quote} </p>
  <p class="source"> ${quoteObject.source}`;

  // Add citation if available
  if(quoteObject.citation){
    quoteHTML += `<span class="citation"> ${quoteObject.citation} </span>`;
  }

  // Add year if available
  if(quoteObject.year){
    quoteHTML += `<span class="year"> ${quoteObject.year} </span>`;
  }
   // Add tag if available
   if(quoteObject.tag){
    quoteHTML += `<small> (#${quoteObject.tag}) </small>`;
  }
  // Add closing tag
  quoteHTML += "</p>";

  // Change innerHTML to display quote
  document.getElementById('quote-box').innerHTML = quoteHTML; 

  // Change background color
  let colors = ['red', 'blue', 'green', 'yellow', 'pink']
  let rndColor = Math.floor(Math.random() * 5);
  document.body.style.backgroundColor = colors[rndColor];
  ;

  // Refresh automatically
  if (autoGenerate === false){
    const interval = setInterval(function() {
      printQuote()
    }, 3000);
    autoGenerate = true;
  }
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);