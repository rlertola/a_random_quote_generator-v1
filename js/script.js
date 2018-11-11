/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/***
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.

  Recommended:
    - Add at least one `year` and/or `citation` property to at least one
      quote object.
***/

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


/***
  Create the `getRandomQuote` function to:
   - generate a random number
   - use the random number to `return` a random quote object from the
     `quotes` array.
***/

const getRandomQuote = (quotesArr) => {
  const randomNumber = Math.floor(Math.random() * (quotesArr.length));
  const randomQuote = quotesArr[randomNumber];

  return randomQuote;
}

/***
  Create the `printQuote` function to:
   - call the `getRandomQuote` function and assign it to a variable.
   - use the properties of the quote object stored in the variable to
     create your HTML string.
   - use conditionals to make sure the optional properties exist before
     they are added to the HTML string.
   - set the `innerHTML` of the `quote-box` div to the HTML string.
***/

const printQuote = () => {
  const randomQuote = getRandomQuote(quotes);
  const quoteBox = document.getElementById('quote-box');
  const quote = `<p id="quote" class="quote">${randomQuote.quote}</p>`;
  const source = `<p id="source" class="source">${randomQuote.source}`;

  if (randomQuote.category) {
    const category = document.getElementById('category');
    category.innerHTML = randomQuote.category;
  }

  if (randomQuote.citation && randomQuote.year) {
    const citation = `<span class="citation">${randomQuote.citation}</span>`;
    const year = `<span class="year">${randomQuote.year}</span>`;
    quoteBox.innerHTML = quote + source + citation + year + '</p>';
  } else {
    quoteBox.innerHTML = quote + source + '</p>';
  }

  // Starts the timer to refresh page after 20 seconds.
  randomizeColor();
  window.setTimeout(printQuote, 20000);

}

// Changes the background color when quote changes.
const randomizeColor = () => {
  function randomNum() {
    return Math.floor(Math.random() * 256);
  }

  let red = randomNum();
  let green = randomNum();
  let blue = randomNum();
  let rgb = `rgb(${red},${green},${blue})`;

  document.body.style.background = rgb;
  document.getElementById('loadQuote').background = rgb;
}

// Changes the quote after 20 seconds.


/***
  When the "Show another quote" button is clicked, the event listener
  below will be triggered, and it will call, or "invoke", the `printQuote`
  function. So do not make any changes to the line of code below this
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Page will open with a quote.
printQuote();

// Remember to delete the comments that came with this file, and replace them with your own code comments.
