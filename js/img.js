// Select all img elements in the document
const imgElements = document.querySelectorAll('img');

// Loop through each img element
imgElements.forEach((img) => {
  // Set the 'loading' attribute to 'lazy'
  img.loading = 'lazy';
})