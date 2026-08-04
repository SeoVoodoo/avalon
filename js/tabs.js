const swiper = new Swiper('.swiper', {

//   autoplay: {
//     delay: 5000,
//   },

  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
  
  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

const tabLinks = document.querySelectorAll(".tablinks");
const tabContents = document.querySelectorAll(".tabcontent");

tabLinks.forEach(function(element) {
   element.addEventListener("click", openTabs);
});

tabLinks.forEach((element) => element.addEventListener("click", openTabs));

// Получим из data-атрибута кнопки идентификатор блока контента.
function openTabs(evt) {
   const btnTarget = evt.currentTarget;
   const place = btnTarget.dataset.place;


    // Уберём со всех кнопок и блоков с контентом вторые классы с -active. 
    // И добавим только для выбранной вкладки. 
    
   tabContents.forEach((currentTab) => currentTab.classList.remove("tabcontent-active"));
   tabLinks.forEach((currentLink) => currentLink.classList.remove("tablinks-active"));
   
   // Идентификатор блока контента находим с помощью переменной place.
   document.querySelector(`#${place}`).classList.add("tabcontent-active");

   btnTarget.classList.add("tablinks-active");
}