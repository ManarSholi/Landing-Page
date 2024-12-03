/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
const menu = ["Section 1", "Section 2", "Section 3" , "Section 4"];

const ul = document.querySelector('#navbar__list');
const fragment = document.createDocumentFragment();

for (let i = 0; i < menu.length; i++) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.textContent = menu[i];
    a.setAttribute('href', '#section' + (i + 1));
    a.classList.add('tab');
    li.appendChild(a);

    fragment.appendChild(li);
}

ul.append(fragment);

const nav = document.querySelector('nav');
nav.addEventListener('click', function (event) {
    if (event.target.tagName === 'A') {
        event.preventDefault();
        const targetId = event.target.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({behavior: 'smooth'});
        }
    }
});

let isScrolling;

function showNavBar() {
    nav.style.top = '0';
}

function hideNavBar() {
    nav.style.top = '-5%';
}

const sections = document.querySelectorAll('section');
const tabs = document.querySelectorAll('.tab');
// Add class 'active' to section when near top of viewport
function makeActive() {
    showNavBar();
    clearTimeout(isScrolling);

    isScrolling = setTimeout(hideNavBar, 1000);

    sections.forEach((section, index) => {
        const box = section.getBoundingClientRect();
        const isActive = box.top >= 0 && box.top < window.innerHeight / 2;

        section.classList.toggle('active', isActive);
        tabs[index].classList.toggle('active', isActive);
    });
}

window.addEventListener('scroll', makeActive);
// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


