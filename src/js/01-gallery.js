// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
console.log(galleryItems);

const ulEl = document.querySelector('.gallery');


function galleryImg(arr) {
    return arr
    .map(
        ({ preview, original, description }) =>
        `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
         <img
           class="gallery__image"
           src="${preview}"
           data-source="${preview}"
           alt="${description}"
         />
        </a>
       </li>`
    )
    .join("");
}

 ulEl.insertAdjacentHTML("beforeend", galleryImg(galleryItems));

 var lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: "alt",
    captionsDelay: 250,
 });



