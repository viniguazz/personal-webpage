// animation

window.addEventListener('scroll', () => {
    const items = document.querySelectorAll('.pop-bottom');
    console.log(items);
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


const htmlElements = [
    {
        tag: '<canvas>',
        description: 'blabla'
    }
];

htmlElements.forEach(item => {

})