const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsListRef = document.querySelector('ul#ingredients');

const ingredientsRef = ingredients.map(ingredient => {
  const itemRef = document.createElement('li');
  itemRef.classList.add('item');
  itemRef.textContent = `${ingredient}`;

  return itemRef;
});

ingredientsListRef.append(...ingredientsRef);
console.log(ingredientsListRef); 



