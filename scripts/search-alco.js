fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=Margarita")
  .then((response) => response.json())
  .then((data => {
    const drinks = data.drinks;
    const showDrinks = document.querySelector("#display_drink");
    showDrinks.innerHTML = "";
    for (let i = 0; i < drinks.length; i++ ) {
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
const button = document.getElementById("btn_search");

button.addEventListener('click', function () {
    const searchedDrink = document.getElementById('cocktail').value;
    console.log(searchedDrink);

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchedDrink}` )
  .then((response) => response.json())
  .then((data => {
    const drinks = data.drinks;
    const showDrinks = document.querySelector("#display_drink");
    showDrinks.innerHTML = "";
    for (let i = 0; i < drinks.length; i++ ) {
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
})
const entered = document.getElementById("cocktail");
entered.addEventListener("keypress", function(event) {
  if (event.key ==="Enter"){
    event.preventDefault();
    document.getElementById("btn").click(); 
  }
});
const btnMarg = document.getElementById("btn_margarita");
btnMarg.addEventListener('click', function () {
   console.log(btnMarg);
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=Margarita")
  .then((response) => response.json())
  .then((data => {
    const drinks = data.drinks;
    const showDrinks = document.querySelector("#display_drink");
    showDrinks.innerHTML = "";
    for (let i = 0; i < drinks.length; i++ ) {
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
});
const btnScr = document.getElementById("btn_screwdriver");
btnScr.addEventListener('click', function () {
   console.log(btnMarg);
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=Screwdriver")
  .then((response) => response.json())
  .then((data => {
    const drinks = data.drinks;
    const showDrinks = document.querySelector("#display_drink");
    showDrinks.innerHTML = "";
    for (let i = 0; i < drinks.length; i++ ) {
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
});
const btnCol = document.getElementById("btn_colada");
btnCol.addEventListener('click', function () {
   console.log(btnMarg);
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=Colada")
  .then((response) => response.json())
  .then((data => {
    const drinks = data.drinks;
    const showDrinks = document.querySelector("#display_drink");
    showDrinks.innerHTML = "";
    for (let i = 0; i < drinks.length; i++ ) {
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
});
const btnMart = document.getElementById("btn_martini");
btnMart.addEventListener('click', function () {
   console.log(btnMarg);
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=Martini")
  .then((response) => response.json())
  .then((data => {
    const drinks = data.drinks;
    const showDrinks = document.querySelector("#display_drink");
    showDrinks.innerHTML = "";
    for (let i = 0; i < drinks.length; i++ ) {
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
});
const btnSpr = document.getElementById("btn_spritz");
btnSpr.addEventListener('click', function () {
   console.log(btnMarg);
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=Spritz")
  .then((response) => response.json())
  .then((data => {
    const drinks = data.drinks;
    const showDrinks = document.querySelector("#display_drink");
    showDrinks.innerHTML = "";
    for (let i = 0; i < drinks.length; i++ ) {
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
});