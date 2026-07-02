
const floatingBlock = document.querySelector('.sidebar-wrap');
const targetElement = document.querySelector('.article-footer');
const heightElement = floatingBlock.offsetHeight;
const marginOffset = heightElement + 240;

window.addEventListener('scroll', function() {

    const scrollTop = window.scrollY || document.documentElement.scrollTop;    
    const upperBound = targetElement.offsetTop - marginOffset;
        
    if (scrollTop > upperBound) {        
        floatingBlock.style.top = `${upperBound}px`;
    } else {
        floatingBlock.style.top = window.pageYOffset + 'px';
    }
});
