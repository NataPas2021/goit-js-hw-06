//const categoriesListRef = document.querySelectorAll('#categories');
//console.log('Number of categories', categoriesListRef.length);


const numberOfCategoriesRef = document.querySelector('ul#categories');
console.log('Number of categories:', numberOfCategoriesRef.children.length);

const nameAndElementsInCategoryRef = numberOfCategoriesRef.querySelectorAll('li.item');
nameAndElementsInCategoryRef.forEach((category) => {
    console.log(`Category: ${category.firstElementChild.textContent}`);
    console.log(`Elements: ${category.lastElementChild.children.length}`);
})



