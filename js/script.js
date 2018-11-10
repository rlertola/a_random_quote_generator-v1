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
    quote: `The ultimate failure of the United States will probably not derive from the problems we see or the conflicts we wage. It will more likely derive from our uncompromising belief in the things we consider unimpeachable and idealized and beautiful. Because every strength is a weakness, if given enough time.`,
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
  const quoteElement = document.getElementById('quote');
  const sourceElement = document.getElementById('source');
  quoteElement.innerHTML = randomQuote.quote;
  sourceElement.textContent = randomQuote.source;

  if (randomQuote.citation) {
    const citationElement = document.getElementById('source').querySelectorAll('citation');
    citationElement.innerText = randomQuote.citation;
  }
  // if (randomQuote.year) {
  //   const yearElement = document.getElementById('source').childNodes[0];
  //   yearElement.innerHTML = randomQuote.year;
  // }

}



/***
  When the "Show another quote" button is clicked, the event listener
  below will be triggered, and it will call, or "invoke", the `printQuote`
  function. So do not make any changes to the line of code below this
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.
