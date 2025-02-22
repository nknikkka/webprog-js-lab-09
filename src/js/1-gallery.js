import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});

const images = [
    {
        preview: 'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
        original: 'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
        description: 'Hokkaido Flower',
    },
    // Додай інші зображення
];

const galleryContainer = document.querySelector(".gallery");

function createMarkup(arr) {
    return arr.map(({ preview, original, description }) => `
        <li class="gallery-item">
            <a class="gallery-link" href="${original}">
                <img class="gallery-image" src="${preview}" alt="${description}" />
            </a>
        </li>
    `).join('');
}

galleryContainer.innerHTML = createMarkup(images);
