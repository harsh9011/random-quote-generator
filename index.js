const api_uri = "https://api.quotable.io/random";
const quote = document.getElementById("quote");
const author = document.getElementById("author");


async function getQuote(url)
{
    const response = await fetch(url);
    var data = await response.json();
    console.log(data);
    quote.innerHTML = data.content;
    author.innerHTML = data.author;

}

 function newquort()
 {
    getQuote(api_uri);
 }

getQuote(api_uri);

