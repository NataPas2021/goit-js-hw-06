const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientRef = ingredients.forEach((ingredient) => {
  const itemRef = document.createElement('li');
  itemRef.classList.add('item');
  itemRef.textContent = `${ingredient}`;
  console.log(itemRef);
});

const ingredientsRef = document.querySelector('ul#ingredients');
ingredientsRef.appendChild(ingredientRef);

console.log(ingredientsRef);



//const listRef = document.getElementById('ingredients');
//listRef.appendChild(ingredientsRef);



//ingredients.appendChild(listItemRef);




