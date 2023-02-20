console.log(`Number of categories:`, document.querySelectorAll('.item').length);
// console.log(`Number of categories:`,document.querySelector('#categories').children.length);


const categoriesItems = document.querySelector('#categories').children;
const categoriesEl = [...categoriesItems];

categoriesEl.forEach(item => {

    console.log(`Category:`, item.querySelector('h2').textContent);
    console.log(`Elements:`, item.querySelector('ul').children.length);
    
});
