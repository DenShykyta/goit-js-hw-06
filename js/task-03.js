const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryRef = document.querySelector('.gallery');

// =========================================================
// const galleryImgsEl = [];

// for (const { url, alt } of images) {

//   const galleryItem = document.createElement('li');
//   const galleryImg = document.createElement('img');
//   galleryImg.src = url;
//   galleryImg.alt = alt;

//   galleryItem.appendChild(galleryImg);

//   galleryImgsEl.push(galleryItem);
// }

// galleryRef.append(...galleryImgsEl);
// ==============================================
const imageMarkup = image => {
return `
<img src = ${image.url} alt = '${image.alt}'>
`
  
}
// console.log(imageMarkup(images[0]));

const imagesMarkup = images.map(imageMarkup).join('');
// console.log(imagesMarkup);
galleryRef.insertAdjacentHTML('afterbegin', imagesMarkup);