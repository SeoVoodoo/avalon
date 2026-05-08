const interiorContainer = document.querySelector('.interior');
const categoryContainer = document.querySelector('.category-list');

if(interiorContainer) {

  interiorContainer.addEventListener('mouseover', (evt) => {
    const currentIndicator = evt.target.closest('.indicator');

    if (currentIndicator) {    
      currentIndicator.classList.add('active');
    }
  });

  interiorContainer.addEventListener('mouseout', (evt) => {
    const currentIndicator = evt.target.closest('.indicator');

    if (currentIndicator) {    
      currentIndicator.classList.remove('active');
    }
  });
}



const sidebar = document.querySelector('.sidebar');
const menuCloseButton = sidebar.querySelector('.btn-menu-close');

const sidebarMobile = document.querySelector('.sidebar-mobile');
const logoMobile = sidebarMobile.querySelector('.navigation-logo');
const footerMobile = sidebarMobile.querySelector('.footer');
const menuOpenButton = sidebarMobile.querySelector('.btn-menu-open');



menuOpenButton.addEventListener('click', () => {
  sidebar.style.transform='translateX(0)';
  menuCloseButton.style.right='-40px';
  sidebarMobile.style.width='100px';
  logoMobile.style.opacity='0';
  footerMobile.style.opacity='0';
  
});

menuCloseButton.addEventListener('click', () => {  
  sidebar.style.transform='';
  menuCloseButton.style.right='';
  sidebarMobile.style.width='';
  logoMobile.style.opacity='1';
  footerMobile.style.opacity='1';
});

const filterOpenButton = document.querySelector('.btn-filter');
const modalFilter = document.querySelector('.modal-filter');
const filterCloseButton = modalFilter.querySelector('.btn-filter-close');

if(filterOpenButton) {
  filterOpenButton.addEventListener('click', () => {    
    modalFilter.style.opacity='1';
    modalFilter.style.zIndex='10';
  })

  filterCloseButton.addEventListener('click', () => {
    modalFilter.style.opacity='0';
    modalFilter.style.zIndex='-1';
  })
}


// const rangeInput = document.querySelectorAll(".range-input input"),
// priceInput = document.querySelectorAll(".price-input input"),
// range = document.querySelector(".slider .progress");
// let priceGap = 1000;
// priceInput.forEach(input =>{
//     input.addEventListener("input", e =>{
//         let minPrice = parseInt(priceInput[0].value),
//         maxPrice = parseInt(priceInput[1].value);
        
//         if((maxPrice - minPrice >= priceGap) && maxPrice <= rangeInput[1].max){
//             if(e.target.className === "input-min"){
//                 rangeInput[0].value = minPrice;
//                 range.style.left = ((minPrice / rangeInput[0].max) * 100) + "%";
//             }else{
//                 rangeInput[1].value = maxPrice;
//                 range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
//             }
//         }
//     });
// });
// rangeInput.forEach(input =>{
//     input.addEventListener("input", e =>{
//         let minVal = parseInt(rangeInput[0].value),
//         maxVal = parseInt(rangeInput[1].value);
//         if((maxVal - minVal) < priceGap){
//             if(e.target.className === "range-min"){
//                 rangeInput[0].value = maxVal - priceGap
//             }else{
//                 rangeInput[1].value = minVal + priceGap;
//             }
//         }else{
//             priceInput[0].value = minVal;
//             priceInput[1].value = maxVal;
//             range.style.left = ((minVal / rangeInput[0].max) * 100) + "%";
//             range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
//         }
//     });
// });

const range1 = document.querySelector('#tailmetr1');
range1.addEventListener('input', handleInputRange1);
const range2 = document.querySelector('#tailmetr2');
range2.addEventListener('input', handleInputRange2);

function handleInputRange1() { 
  event.target.parentNode.parentNode.style.setProperty( '--value-1', event.target.value );
  event.target.nextElementSibling.value = event.target.value 
};

function handleInputRange2() {
  event.target.parentNode.parentNode.style.setProperty( '--value-2', event.target.value );
  event.target.nextElementSibling.value = event.target.value 
};

const filterGroupWrap = document.querySelector('.filter-group-wrap');
const toggleFilterButtons = document.querySelectorAll('.toggle-button');
// const catalogFilterGroupName = filterGroupWrap.querySelector('.catalog-filter-group-name');


toggleFilterButtons.forEach(button => {

  button.addEventListener('click', () => {
    const isExpanded = button.getAttribute('aria-expanded') === 'true';

    const contentId = button.getAttribute('aria-controls');
    const content = filterGroupWrap.querySelector(`#${contentId}`);

    button.setAttribute('aria-expanded', !isExpanded);

    if (isExpanded) {
      content.setAttribute('hidden', '');   
      // catalogFilterGroupName.style.color='#181818';   

    } else {
      content.removeAttribute('hidden');   
      // catalogFilterGroupName.style.color='';    
    }

  });
})



