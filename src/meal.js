// namemenuItem

function nameMenuItem(name) {
return `Delicious ${name}`;
};

// console.log(nameMenuItem("Burrito"));
// console.log(nameMenuItem("Pizza"));
// console.log(nameMenuItem("Taco"));

// var menuItemName = nameMenuItem ("Pizza");
// console.log(menuItemName);

function createMenuItem(name, price, type) {
return menuItem = {
  name: name,
  price: price,
  type: type
}
};

// addIngredients

function addIngredients(food, ingredients){
  if (!ingredients.includes(food)){
    return ingredients.push(food)
  }
};

// formatPrice

function formatPrice(price){
return "$" + price;
};

// decreasePrice

function decreasePrice(price){

  return price - (price * .1);
};

function createRecipe(title, ingredients, menuItemType){
  return recipe = {
    title: title,
    ingredients: ingredients,
    type: menuItemType
  }
};



module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
};