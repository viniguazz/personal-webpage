// animation

window.addEventListener('scroll', () => {
    const items = document.querySelectorAll('.pop-bottom');
    items.forEach(item => {
        const itemBottom = item.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;
        if (itemBottom < windowHeight && itemBottom + item.offsetHeight > 0) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
});


// toggle menu

document.querySelector('.menu-toggle').addEventListener('click', function() {

    const navBtns = document.querySelectorAll('.nav-btn');
    const toggle = document.querySelector('.menu-toggle');

    navBtns.forEach(function(btn) {
       btn.classList.toggle('active');
    });

    if (toggle.textContent === 'Close Menu') {
        toggle.innerHTML = '<a href="#">Open Menu</a>'
        toggle.classList.remove('closed');
        toggle.classList.add('open');

    } else {
        toggle.innerHTML = '<a href="#">Close Menu</a>'
        toggle.classList.remove('open');
        toggle.classList.add('close');
    }

});


//capturing and saving tags in the local storage

const htmlElements = Array.from(document.querySelectorAll('*'));
const tagNames = htmlElements.map(element => element.tagName.toLowerCase());
const uniqueTagNames = [...new Set(tagNames)];
console.log(uniqueTagNames)

localStorage.setItem('htmlTags', JSON.stringify(uniqueTagNames));