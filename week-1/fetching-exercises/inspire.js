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
  xhr.open('get', url);
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
      console.log(p_categories);
      }
   };
  xhr.open('get', url);
  xhr.send();
}
document.getElementById("get-categories").addEventListener("click", get_categories);


function get_from_category() {

  // read the category from user input
  // build your url

  /*
    get a random quote from the chosen category
    print the quote to the console
  */

}
document.getElementById("get-from-category").addEventListener("click", get_from_category);



function get_by_length() {

  // read the min & max lengths from user input
  // build your url

  /*
    get a random quote in the given range
    print the quote to the console
  */

}
document.getElementById("get-by-length").addEventListener("click", get_by_length);


function length_and_category() {

  // read user input
  // build your url

  /*
    get a random quote matching the user input
    print the quote to the console
  */

}
document.getElementById("length-and-category").addEventListener("click", length_and_category);

