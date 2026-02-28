const button = document.getElementById("btn");

button.addEventListener('click', function () {
    const searchedDrink = document.getElementById('cocktail').value;
    console.log(searchedDrink);

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchedDrink}` )
  .then((response) => response.json())
  .then((data => {
    const drinks = data.drinks;
    const showDrinks = document.querySelector("#display_drink") 
    for (let i = 0; i < drinks.length; i++ ) {
    showDrinks.innerHTML += `<div class="cell"><a href="./detail.html?id=${drinks[i].idDrink}"><img class="image is-1by1" src="${drinks[i].strDrinkThumb}"><p class="has-text-white-ter"> ${drinks[i].strDrink} </p></a></div>`;
    }
  }))
  .catch((error) => console.error(error));
})
const entered = document.getElementById("cocktail");
entered.addEventListener("keypress", function(event) {
  if (event.key ==="Enter"){
    event.preventDefault();
    document.getElementById("btn").click(); 
  }
});