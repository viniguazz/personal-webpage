// table feeder

const htmlTags = JSON.parse(localStorage.getItem('htmlTags'));
console.log('tags: ', htmlTags);

const tagDescriptions = {
    html: 'Represents the root (top-level element) of an HTML document, so it is also referred to as the root element. All other elements must be descendants of this element.',
    base: 'Specifies the base URL to use for all relative URLs in a document. There can be only one such element in a document.',
    head: 'Contains machine-readable information (metadata) about the document, like its title, scripts, and style sheets.',
    link: 'Specifies relationships between the current document and an external resource. This element is most commonly used to link to CSS but is also used to establish site icons (both "favicon" style icons and icons for the home screen and apps on mobile devices) among other things.',
    meta: 'Represents metadata that cannot be represented by other HTML meta-related elements, like <base>, <link>, <script>, <style> and <title>.',
    style: 'Contains style information for a document or part of a document. It contains CSS, which is applied to the contents of the document containing this element.',
    title: 'Defines the document\'s title that is shown in a browser\'s title bar or a page\'s tab. It only contains text; tags within the element are ignored.',
    body: "represents the content of an HTML document. There can be only one such element in a document.",
    address: "Indicates that the enclosed HTML provides contact information for a person or people, or for an organization.",
    article: "Represents a self-contained composition in a document, page, application, or site, which is intended to be independently distributable or reusable (e.g., in syndication). Examples include a forum post, a magazine or newspaper article, a blog entry, a product card, a user-submitted comment, an interactive widget or gadget, or any other independent item of content.",
    aside: "Represents a portion of a document whose content is only indirectly related to the document's main content. Asides are frequently presented as sidebars or call-out boxes.",
    footer: "Represents a footer for its nearest ancestor sectioning content or sectioning root element. A <footer> typically contains information about the author of the section, copyright data, or links to related documents.",
    header: "Represents introductory content, typically a group of introductory or navigational aids. It may contain some heading elements but also a logo, a search form, an author name, and other elements.",
    h1: "Represent six levels of section headings. <h1> is the highest section level and <h6> is the lowest.",
    hgroup: "Represents a heading grouped with any secondary content, such as subheadings, an alternative title, or a tagline.",
    main: "Represents the dominant content of the body of a document. The main content area consists of content that is directly related to or expands upon the central topic of a document, or the central functionality of an application.",
    nav: "Represents a section of a page whose purpose is to provide navigation links, either within the current document or to other documents. Common examples of navigation sections are menus, tables of contents, and indexes.",
    section: "Represents a generic standalone section of a document, which doesn't have a more specific semantic element to represent it. Sections should always have a heading, with very few exceptions.",
    search: "Represents a part that contains a set of form controls or other content related to performing a search or filtering operation.",


}
console.log('tag descriptions: ', tagDescriptions)

const htmlElements = [];

htmlTags.forEach(element => {
    if (element in tagDescriptions) {
        htmlElements.push({
            tag: `<${element}>`,
            name: element,
            description: tagDescriptions[element]
        })
    }
    console.log('tag added: ', htmlElements)
}   
);

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
