'use strict';
console.log("Let's get this party started!");
/** create an async function where we click we can search giphy */
let $form = $('#search-form');
let $searchTerm = $('#retrieve-text');
$form.on('submit', search);

function search(e) {

  e.preventDefault();
  getGiphy();
}


const GIPHY_URL = 'http://api.giphy.com/v1/gifs/search';
const API_KEY = 'MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym';
const CONFIG = { params: { q: $searchTerm.val(), api_key: API_KEY } };

async function getGiphy() {

  let response = await axios.get(GIPHY_URL, CONFIG);
  console.log('response', response);
}
