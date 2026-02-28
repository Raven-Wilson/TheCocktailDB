const button = document.getElementById("btn");

button.addEventListener('click', function () {
    const searchedDrink = document.getElementById('cocktail').value;
    console.log(searchedDrink);

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchedDrink}` )
  .then((response) => response.json())
//   .then((data) => console.log(data))
  .then((data => {
    const drinks = data.drinks;
    const showDrinks = document.querySelector("#display_drink") 
    for (let i = 0; i < drinks.length; i++ ) {
    showDrinks.innerHTML += `<div class="cell"><img class="image is-1by1" src="${drinks[i].strDrinkThumb}"><p class="has-text-white-ter"> ${drinks[i].strDrink} </p></div>`;
    }
  }))
  .catch((error) => console.error(error));
})
