fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Beer" )
  .then((response) => response.json())
  .then((data => {
    const drinks = data.drinks;
    const showDrinks = document.querySelector("#display_drink") 
    for (let i = 1; i < 13; i++ ) {
      showDrinks.innerHTML += `<div class="cell card m-2">
      <a href="detail.html?id=${drinks[i].idDrink}">
      <img class="image is-1by1" src="${drinks[i].strDrinkThumb}">
      <div class="card-content">
      <p class="content mt-2 mb-2 is-size-4" id="title"> ${drinks[i].strDrink} </p>
      </div>
      </a>
      </div>`;
    }
  }))
  .catch((error) => console.error(error));