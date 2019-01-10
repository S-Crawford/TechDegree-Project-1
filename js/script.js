/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
******************************************/

/*
  Create array of quote objects
*/

var quotes = [
  {
   quote:"When you reach the end of your rope, tie a knot in it and hang on.",
   author:"Franklin D. Roosevelt",
   year: 1936,
   citation: "A speech of some sort"
  },
  {
   quote:"You cannot shake hands with a clenched fist.",
   author:"Indira Gandhi",
   year: 1966,
  },
  {
   quote:"Learning never exhausts the mind.",
   author:"Leonardo da Vinci",
   year: 1498,
  },
  {
   quote:"No act of kindness, no matter how small, is ever wasted.",
   author:"Aesop",
   year: "582 BC",
  },
  {
   quote:"There is only one corner of the universe you can be certain of improving, and that's your own self.",
   author:"Aldous Huxley",
   year: 1953,
   citation: "Your Corner (not boxing) a memorandum of sheer wit"
  },
  {
   quote:"The journey of a thousand miles begins with one step.",
   author:"Lao Tzu",
   //year: "540 BC",
   citation: "Spoken to the wind and its been floating ever since"
  },
];


/*
  getRandomQuote, generate a random number within array bounds and return the selected object
*/
function getRandomQuote(){
  var rand = Math.floor(Math.random() * quotes.length);
  return quotes[rand];
}



/*
  printQuote, takes the quote object and converts it to HTML
*/
function printQuote () {
  var theQuote = getRandomQuote();
  var str = '<p class ="quote">' + theQuote.quote + '</p>'
  //Check for author
  if("author" in theQuote){
    str += '<p class="source">' + theQuote.author;
  }
  //check for citation
  if("citation" in theQuote){
    str += '<span class="citation">' + theQuote.citation + '</span>';
  }
  //check for year
  if("year" in theQuote){
    str += '<span class="year">' + theQuote.year + '</span>';
  }
  //finish p element
  str += '</p>';
  document.getElementById("quote-box").innerHTML = str;
}



/*
  Show another quote button. click to generate another random quote
*/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);