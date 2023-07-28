// Function to create and append the header to the page
function createHeader(headerOriginal) {
    // Create the header element
    const header = document.createElement('header');
  
    // Add CSS styles to the header
    header.style.backgroundColor = 'green';
    header.style.padding = '10px';
    header.style.display = 'flex';
    header.style.justifyContent = 'space-around';
  
    // Create the navigation buttons
    const homeButton = document.createElement('button');
    homeButton.innerText = 'Home';
  
    const aboutButton = document.createElement('button');
    aboutButton.innerText = 'About';
  
    const contactButton = document.createElement('button');
    contactButton.innerText = 'Contact';
  
    // Append buttons to the header
    header.appendChild(homeButton);
    header.appendChild(aboutButton);
    header.appendChild(contactButton);
  
    // Append the header to the <body> element
    headerOriginal.appendChild(header);
  }

function hideHeader () {

    const headerOriginal = element.querySelector('.main-header');
    const container = headerOriginal.querySelector('.container');
    container.style.display = 'none';
    createHeader(headerOriginal);
}

document.addEventListener('DOMContentLoaded', () => {
    console.log("window.location.href ------->>>>> ", window.location.href)
    if (window.location.href.includes('https://onefiveb2b.juniperbetemp.com/insurances/')) {
        hideHeader
    }
  });