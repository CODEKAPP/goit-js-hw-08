// Add imports above this line
import SimpleLightbox from "simplelightbox";
import { galleryItems } from './gallery-items';
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

// Crea una instancia de SimpleLightbox
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

// Obtén la referencia al elemento .gallery
const gallery = document.querySelector('.gallery');

// Crea el markup de la galería y renderízalo
const galleryMarkup = galleryItems
  .map(({ preview, original, description }) => `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
  </li>`)
  .join('');

gallery.insertAdjacentHTML('beforeend', galleryMarkup);

console.log(galleryItems);
