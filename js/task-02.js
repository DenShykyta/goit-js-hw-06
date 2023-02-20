const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsListRef = document.querySelector('#ingredients');
// ==================================================================

// const ingredientsArr = [];

// for (let i = 0; i < ingredients.length; i += 1) {
//   const ingItem = document.createElement('li');
//   ingItem.textContent = (ingredients[i]);
//   ingItem.classList.add('item');

//   ingredientsArr.push(ingItem);
// }
  
// ingredientsListRef.append(...ingredientsArr);

// =================================================================

const ingredientsItems = ingredients.map(ingredient => {
  const ingItem = document.createElement('li');
  ingItem.textContent = ingredient;
  ingItem.classList.add('item');
  return ingItem;
})

ingredientsListRef.append(...ingredientsItems);