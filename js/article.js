
const floatingBlock = document.querySelector('.sidebar-wrap');
const targetElement = document.querySelector('.article-footer');
const marginOffset = 680;


window.addEventListener('scroll', function() {

    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    //console.log('scrollTop', scrollTop);

    const upperBound = targetElement.offsetTop - marginOffset;
    //console.log('upperBound', upperBound);

    
    if (scrollTop > upperBound) {        
        floatingBlock.style.top = `${upperBound}px`;
    } else {
        floatingBlock.style.top = window.pageYOffset + 'px';
    }
});
