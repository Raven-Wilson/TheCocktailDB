fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka")
  .then((response) => response.json())
  .then((data => {
    const drinks = data.drinks;
    const showDrinks = document.querySelector("#display_drink") 
    showDrinks.innerHTML = "";
    for (let i = 0; i < 24; i++ ) {
    showDrinks.innerHTML +=` <div class="cell card m-2"><a href="detail.html?id=${drinks[i].idDrink}">
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

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${searchedDrink}` )
  .then((response) => response.json())
  .then((data => {
    const drinks = data.drinks;
    const showDrinks = document.querySelector("#display_drink") 
    showDrinks.innerHTML = "";
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
    document.getElementById("btn_search").click(); 
  }
});
const btnVodka = document.getElementById("btn_vodka");
btnVodka.addEventListener('click', function () {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka")
  .then((response) => response.json())
  .then((data => {
    const drinks = data.drinks;
    const showDrinks = document.querySelector("#display_drink") 
    showDrinks.innerHTML = "";
    for (let i = 0; i < 24; i++ ) {
    showDrinks.innerHTML +=` <div class="cell card m-2"><a href="detail.html?id=${drinks[i].idDrink}">
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
const btnGin = document.getElementById("btn_gin");
btnGin.addEventListener('click', function () {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin")
  .then((response) => response.json())
  .then((data => {
    const drinks = data.drinks;
    const showDrinks = document.querySelector("#display_drink");
    showDrinks.innerHTML = "";
    for (let i = 0; i < 24; i++ ) {
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
const btnRum = document.getElementById("btn_rum");
btnRum.addEventListener('click', function () {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Rum")
  .then((response) => response.json())
  .then((data => {
    const drinks = data.drinks;
    const showDrinks = document.querySelector("#display_drink");
    showDrinks.innerHTML = "";
    for (let i = 0; i < 24; i++ ) {
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
const btnLime = document.getElementById("btn_lime");
btnLime.addEventListener('click', function () {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Lime")
  .then((response) => response.json())
  .then((data => {
    const drinks = data.drinks;
    const showDrinks = document.querySelector("#display_drink");
    showDrinks.innerHTML = "";
    for (let i = 0; i < 24; i++ ) {
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
const btnLemon = document.getElementById("btn_lemon");
btnLemon.addEventListener('click', function () {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Lemon")
  .then((response) => response.json())
  .then((data => {
    const drinks = data.drinks;
    const showDrinks = document.querySelector("#display_drink");
    showDrinks.innerHTML = "";
    for (let i = 0; i < 24; i++ ) {
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