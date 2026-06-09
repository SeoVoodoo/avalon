const pictures = [
  'assets/img/product-img/product-big-1.webp',
  'assets/img/product-img/product-big-2.webp',
  'assets/img/product-img/product-big-3.webp',
  'assets/img/product-img/product-big-4.webp'
];

const galleryButtons = document.querySelectorAll('.gallery__picture-preview');
const fullPicture = document.querySelector('.full-picture');

const changeFullPicture = (thumbnail, fullFoto) => {

    thumbnail.addEventListener('click', () => fullPicture.src = fullFoto);
}

for (let i = 0; i <  galleryButtons.length; i++) {

    changeFullPicture(galleryButtons[i], pictures[i]);
}

const accordeon = document.querySelector(".accordeon");
const accordeonTitles = accordeon.querySelectorAll(".accordeon__title");

accordeonTitles.forEach(button => {

  button.addEventListener('click', () => {
    const isExpanded = button.getAttribute('aria-expanded') === 'true';

    const contentId = button.getAttribute('aria-controls');
    const content = accordeon.querySelector(`#${contentId}`);

    button.setAttribute('aria-expanded', !isExpanded);

    if (isExpanded) {           
      content.style.opacity = 0;
      content.style.maxHeight = 0;

    } else {      
      content.style.opacity = 1;      
      content.style.maxHeight = content.scrollHeight + 'px';  
    }    

  });
})