// const apiKey = 1;
// const key = {
//   method: "GET",
//   headers: {
//     'Authorization': `Bearer ${apiKey}`,
//   },
// };
fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic" )
  .then((response) => response.json())
//  .then((data) => console.log(data))
  .then((data => {
    const drinks = data.drinks;
    const showDrinks = document.querySelector("#display_drink") 
    for (let i = 20; i < 45; i++ ) {
    showDrinks.innerHTML += `<div class="cell"><img class="image is-1by1" src="${drinks[i].strDrinkThumb}"><p class="has-text-white-ter"> ${drinks[i].strDrink} </p></div>`;
    }
  }))
  .catch((error) => console.error(error));


