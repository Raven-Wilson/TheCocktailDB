fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic" )
  .then((response) => response.json())
//  .then((data) => console.log(data))
  .then((data => {
    const drinks = data.drinks;
    const showDrinks = document.querySelector("#display_drink") 
    for (let i = 0; i < 24; i++ ) {
    showDrinks.innerHTML += `<div class="cell card m-2 ">
      <a href="./pages/detail.html?id=${drinks[i].idDrink}">
      <div class="card-image">
      <img id="drinkImg" class="image is-1by1" src="${drinks[i].strDrinkThumb}">
      </div>
      <div class="card-content">
      <p class="content mt-2 mb-2 is-size-4" id="title"> ${drinks[i].strDrink} </p>
      </div>
      </a>
      </div>`;
    }
  }))
  .catch((error) => console.error(error));


console.log(window.innerWidth);

