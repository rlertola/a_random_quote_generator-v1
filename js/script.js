/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
******************************************/

const quotes = [
  {
    quote: `You know you're in love when you can’t fall asleep because reality is finally better than your dreams.`,
    source: 'Dr. Suess',
    category: 'Love'
  },
  {
    quote: `The first step toward success is taken when you refuse to be a captive of the environment in which you first find yourself.`,
    source: 'Mark Caine',
    category: 'Success'
  },
  {
    quote: `Only I can change my life. No one can do it for me.`,
    source: 'Carol Burnett',
    category: 'Inspirational'
  },
  {
    quote: `It is a far, far better thing that I do, than I have ever done; it is a far, far better rest that I go to than I have ever known.`,
    source: 'Charles Dickens',
    category: 'Literature',
    citation: 'A Tale of Two Cities',
    year: 1859
  },
  {
    quote: `It does not matter how slowly you go as long as you do not stop.`,
    source: 'Confucius',
    category: 'Inspirational'
  },
  {
    quote: `I can’t give you a sure-fire formula for success, but I can give you a formula for failure: try to please everybody all the time.`,
    source: 'Herbert Bayard Swope',
    category: 'Success'
  },
  {
    quote: `I’m a success today because I had a friend who believed in me and I didn\'t have the heart to let him down.`,
    source: 'Abraham Lincoln',
    category: 'Friendship'
  },
  {
    quote: `The ultimate failure of the United States will likely derive from our uncompromising belief in the things we consider unimpeachable and idealized and beautiful.`,
    source: 'Chuck Klosterman',
    category: 'Literature',
    citation: `But What if We're Wrong`,
    year: 2017
  },
  {
    quote: 'Only put off until tomorrow what you are willing to die having left undone.',
    source: 'Pablo Picasso',
    category: 'Inspirational'
  },
  {
    quote: 'It’s the possibility of having a dream come true that makes life interesting.',
    source: 'Paulo Coelho',
    category: 'Literature',
    citation: 'The Alchemist',
    year: 1988
  }
];

// Pulls a quote from the array using a random number between 0 and array.length as an index.
const getRandomQuote = (quotesArr) => {
  const randomNumber = Math.floor(Math.random() * (quotesArr.length));
  const randomQuote = quotesArr[randomNumber];

  return randomQuote;
}


// Puts the random quote and other info on the page.
const printQuote = () => {
  // Stop timer so it can start fresh at the bottom.
  stopTimer();

  // Sets the quote and source on the page since all items have them.
  const randomQuote = getRandomQuote(quotes);
  const quoteBox = document.getElementById('quote-box');
  const quote = `<p id="quote" class="quote">${randomQuote.quote}</p>`;
  const source = `<p id="source" class="source">${randomQuote.source}`;

  // If category present.
  if (randomQuote.category) {
    const category = document.getElementById('category');
    category.innerHTML = randomQuote.category;
  }

  // If citation AND year are present.
  if (randomQuote.citation && randomQuote.year) {
    const citation = `<span class="citation">${randomQuote.citation}</span>`;
    const year = `<span class="year">${randomQuote.year}</span>`;
    quoteBox.innerHTML = quote + source + citation + year + '</p>';
  } else {
    quoteBox.innerHTML = quote + source + '</p>';
  }

  // Start timer again, and change background color.
  startTimer();
  randomizeColor();
}


// Changes the background color when printQuote is run.
const randomizeColor = () => {
  // Separate randomNum function for colors.
  function randomNum() {
    return Math.floor(Math.random() * 256);
  }

  // Makes an rgb out of random red, green and blue.
  let red = randomNum();
  let green = randomNum();
  let blue = randomNum();
  let rgb = `rgb(${red},${green},${blue})`;

  document.body.style.background = rgb;
  document.getElementById('loadQuote').background = rgb;
}


// Automatically changes the quote after 20 seconds if the button has not been clicked.
let timer;
const startTimer = () => {
  timer = setTimeout(printQuote, 20000);
}
// Stops the timer everytime printQuote is called.
const stopTimer = () => {
  clearTimeout(timer);
}

// On click listener for the new quote button.
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// Page will open with a quote.
printQuote();
