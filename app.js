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

//capturing and saving tags in the local storage

const htmlElements = Array.from(document.querySelectorAll('*'));
const tagNames = htmlElements.map(element => element.tagName.toLowerCase());
const uniqueTagNames = [...new Set(tagNames)];
console.log(uniqueTagNames)

localStorage.setItem('htmlTags', JSON.stringify(uniqueTagNames));