// table feeder

const htmlTags = JSON.parse(localStorage.getItem('htmlTags'));
console.log(htmlTags);

const tagDescriptions = {
    html: 'Represents the root (top-level element) of an HTML document, so it is also referred to as the root element. All other elements must be descendants of this element',
    base: 'Specifies the base URL to use for all relative URLs in a document. There can be only one such element in a document',
    head: 'Contains machine-readable information (metadata) about the document, like its title, scripts, and style sheets',
    link: 'Specifies relationships between the current document and an external resource. This element is most commonly used to link to CSS but is also used to establish site icons (both "favicon" style icons and icons for the home screen and apps on mobile devices) among other things'
}

const htmlElements = [];

htmlTags.forEach(element => {
    if (element in tagDescriptions) {
        htmlElements.push({
            tag: `<${element}>`,
            name: element,
            description: tagDescriptions.element
        })
    }
}
)

htmlElements.forEach(item => {

    console.log(item)

    const table = document.getElementsByClassName('html-dict')[0];
    const tbody = table.getElementsByTagName('tbody')[0];

    const newRow = document.createElement('tr');

    const cell1 = document.createElement('th');
    cell1.setAttribute('scope', 'row');
    cell1.textContent = item.tag;
    newRow.appendChild(cell1);

    const cell2 = document.createElement('td');
    console.log(cell2)
    cell2.textContent = item.name;
    console.log(item.name)
    console.log(cell2)
    newRow.appendChild(cell2);

    const cell3 = document.createElement('td');
    cell3.textContent = item.description;
    newRow.appendChild(cell3);

    tbody.appendChild(newRow);

});


