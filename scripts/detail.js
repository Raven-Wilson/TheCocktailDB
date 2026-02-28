console.log(window)
console.log(window.location.search)
const search = window.location.search;
const id = search.split("=")[1];
console.log(id) 
if (id){
fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
  .then((response) => response.json())
  .then((data => {
    console.log(data)
    const drinks = data.drinks;
    const drink = drinks[0];
    console.log(drink)
    let ingredients = new Array();
    for (let i = 1; i < 16; i++ ) {
      ingredient = drink[`strIngredient${i}`];
      measurement = drink[`strMeasure${i}`];
      if(ingredient != null)
      { 
        if(measurement != null)
        {
          ingredients.push(`${ingredient}: ${measurement} <br>`);
        }
        else
        {
          ingredients.push(`${ingredient}<br>`);
        }
      }
    }
    
    const showImage = document.querySelector("#display_image") 
    showImage.innerHTML = `<img class="image is-1by1" src="${drink.strDrinkThumb}"></img>`;
    const showName = document.querySelector("#drink_name")
    showName.innerHTML = `<h4 class="title"> ${drink.strDrink} </h4>`;
    const showDetails = document.querySelector("#drink_details")
    showDetails.innerHTML = `<p class="is-size-5 has-text-black"> ${drink.strAlcoholic} </p> <p class="is-size-5 has-text-black"> ${drink.strGlass} </p><br>`;
    const showIngredients = document.querySelector("#drink_ingredients")
    showIngredients.innerHTML = `<h5 class="is-size-4 subtitle">Ingredients</h5><p class="is-size-5 has-text-black">${ingredients.join(" ")}</p><br>`;
    const showInstructions = document.querySelector("#drink_instructions")
    showInstructions.innerHTML = `<h5 class="is-size-4 subtitle">Instructions</h5><p class="is-size-5 has-text-black">${drink.strInstructions}</p><br>`;
  }))
  .catch((error) => console.error(error));
}