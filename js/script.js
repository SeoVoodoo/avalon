const interiorContainer = document.querySelector('.interior');
const categoryContainer = document.querySelector('.category-list');

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
  console.log("Тык");
  sidebar.style.transform='';
  menuCloseButton.style.right='';
  sidebarMobile.style.width='';
  logoMobile.style.opacity='1';
  footerMobile.style.opacity='1';
});

