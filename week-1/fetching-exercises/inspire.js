// docs: https://theysaidso.com/api/

function get_random() {

  /*
    send a get request to this url:
      http://quotes.rest/qod/random.json
    print the quote to the console
  */
  const xhr = new XMLHttpRequest();
  const url = 'http://quotes.rest/qod.json';
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status >= 200) {
      const response = JSON.parse(xhr.response);
      const p_quotes = response.contents.quotes[0].quote;
      console.log(p_quotes);
      }
   };
  xhr.open('GET', URL);
  xhr.send();
}
document.getElementById("get-categories").addEventListener("click", get_categories);



function get_categories() {

  /*
    send a get request to this url:
      http://quotes.rest/qod/categories.json
    print the categories to the console using console.table
      https://developer.mozilla.org/en-US/docs/Web/API/Console/table
  */
  const xhr = new XMLHttpRequest();
  const url = 'http://quotes.rest/qod/categories.json';
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status >= 200) {
      const response = JSON.parse(xhr.response);
      const p_categories = response.contents.categories;
      console.table(p_categories ["Categories"]);
      }
   };
  xhr.open('GET', URL);
  xhr.send();
}
document.getElementById("get-categories").addEventListener("click", get_categories);


function get_from_category() {
  const inputValue = document.getElementById('category').value;  // read the category from user input
  const encodedValue = encodeURIComponent(inputValue);
  const url = 'http://quotes.rest/qod.json?category=' + encodedValue;   // build your url
  const xhr = new XMLHttpRequest();
  if (xhr.readyState === 4 && xhr.status >= 200) {
      const response = JSON.parse(xhr.response);
      const category_quotes = response.contents.quotes[0].quote; // get a random quote from the chosen category print the quote to the console
      console.log(category_quotes);
      }
   };
  xhr.open('GET', URL);
  xhr.send();
}
document.getElementById("get-from-category").addEventListener("click", get_from_category);



function get_by_length() {
  const minLenght = document.getElementById('min').value; // read the min length from user input
  const maxLenght = document.getElementById('max').value; // read the max length from user input
  const encodedMin = encodeURIComponent(minLenght);
  const encodedMax = encodeURIComponent(maxLenght);
  const url = 'https://quotes.rest/quote/random?minlength=${encodedMin}&maxlength=${encodedMax}'; // build your url
  const xhr = new XMLHttpRequest();
  if (xhr.readyState === 4 && xhr.status >= 200) {
      const response = JSON.parse(xhr.response);
      const randomQuote = response.contents.quotes[0].quote; // get a random quote in the given range print the quote to the console
      console.log(randomQuote);
      }
   };
  xhr.open('GET', URL);
  xhr.send();
}
document.getElementById("get-by-length").addEventListener("click", get_by_length);


function length_and_category() {
  const inputValue = document.getElementById('category').value; // read user input
  const encodedValue = encodeURIComponent(inputValue);
  const minLenght = document.getElementById('min').value;
  const encodedMin = encodeURIComponent(minLenght);
  const maxLenght = document.getElementById('max').value;
  const encodedMax = encodeURIComponent(maxLenght);
  const url = 'https://quotes.rest/quote/random?minlength=${encodedMin}&maxlength=${encodedMax}';  // build your url

  const xhr = new XMLHttpRequest();   
  if (xhr.readyState === 4 && xhr.status >= 200) {
      const response = JSON.parse(xhr.response);
      const legent_and_category_quotes = response.contents.quotes[0].quote; // get a random quote matching the user input print the quote to the console
      console.log(legent_and_category_quotes);
      }
   };
  xhr.open('GET', URL);
  xhr.send();
}
document.getElementById("length-and-category").addEventListener("click", length_and_category);

