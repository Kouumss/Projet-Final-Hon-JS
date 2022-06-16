// NAV BAR

let navbar = document.getElementsByClassName('navbar')[0];
let navI1 = document.getElementsByTagName('i')[0];
let navI2 = document.getElementsByTagName('i')[1];
let navI3 = document.getElementsByTagName('i')[2];
let navI4 = document.getElementsByTagName('i')[3];
let btnNav = navbar.querySelectorAll('button');
let aNav = navbar.querySelectorAll('a');
let imgNav = navbar.getElementsByTagName('img')[0];




// SCROLL

window.addEventListener('scroll', () => {
    if (window.scrollY >= 705) {
        navbar.style.backgroundColor = 'black';
        navbar.style.color = 'white';
        imgNav.setAttribute('src', '../../public/img/white-logo.png');
        btnNav.forEach(element => {
            element.style.color = 'white';
            element.classList.remove('text-black')
        })
        aNav.forEach(element => {
            element.style.color = 'white';
            element.classList.remove('text-black')
        })
        
    } else if (window.scrollY <= 705) {

        navbar.style.backgroundColor = "rgb(245,235,223)";
        navbar.style.color = 'black';
        imgNav.setAttribute('src', '../../public/img/logo.png');
        btnNav.forEach(element => {
            element.style.backgroundColor = 'transparent';
            element.classList.add('text-black')
            element.addEventListener('mouseenter', (e) => {
                element.style.color = "grey";
                element.style.borderBottom = "1px solid grey"
            })
            element.addEventListener('mouseout', (e) => {
                element.style.color = "white";
                element.style.borderBottom = "none";
            })
        })
        aNav.forEach(element => {
            element.style.backgroundColor = 'transparent';
            element.classList.add('text-black')
            element.addEventListener('mouseenter', (e) => {
                element.style.color = "grey";
                element.style.borderBottom = "1px solid grey"
            })
            element.addEventListener('mouseout', (e) => {
                element.style.color = "white";
                element.style.borderBottom = "none";
            })
        })
    }
});


// ## MODE JOUR / NUIT

let boutonMoon = document.getElementsByClassName('Moon')[0];

function myMoon() {
    var element = document.body;
    element.classList.toggle('modeMoon')
}



// SECTION TESTIMONIALS
// CIBLAGE BOUTONS

let carouselInner = document.getElementsByClassName('carousel-inner')[0];
let btnCarouBefore = document.getElementById('btnCarouselBefore');
let btnCarouAfter = document.getElementById('btnCarouselAfter');
let cardCarou = document.getElementsByClassName("maCardCarou");
let itemCarouCacher = document.getElementsByClassName('monItemCacher');

cardCarou = [...cardCarou]
let a = 0;


btnCarouBefore.addEventListener("click", () => {
    a++
    if (a > 1) {
        a = -1
    }
    if (a <= 1) {
        cardCarou.forEach(element => {
            element.style.transform = `translate(${a * element.getBoundingClientRect().width}px)`;
        });
    }
})

btnCarouAfter.addEventListener("click", () => {
    a--
    if (a < -1) {
        a = 1
    }
    if (a >= -1) {
        cardCarou.forEach(element => {
            element.style.transform = `translate(${a * element.getBoundingClientRect().width}px)`;
        });
    }
})