


























// Get all the sections
var sections = document.querySelectorAll('section');

// Options for the Intersection Observer
var options = {
    root: null, // use the viewport
    rootMargin: '0px',
    threshold: 0.1 // call the callback when 10% of the target is visible
};

// Callback for the Intersection Observer
var callback = function(entries, observer) {
    entries.forEach(function(entry) {
        // If the section is in the viewport
        if (entry.isIntersecting) {
            // Show the loading icon
            var loadingIcon = entry.target.querySelector('.fas.fa-spinner.fa-spin');
            loadingIcon.style.display = 'block';

            // Simulate a delay for loading content
            setTimeout(function() {
                // Hide the loading icon and load the actual content
                loadingIcon.style.display = 'none';
                loadSectionContent(entry.target);
            }, 2000);
        }
    });
};

// Function to load section content
var loadSectionContent = function(section) {
    // Load the actual content here
};

// Create the Intersection Observer with the desired options
var observer = new IntersectionObserver(callback, options);

// Start observing all sections
sections.forEach(function(section) {
    observer.observe(section);
});






// document.addEventListener("DOMContentLoaded", function(event) { 
//     // get stored scroll position
//     let storedScrollPosition = localStorage.getItem('scrollPosition');
    
//     // if stored position exists, scroll to that position
//     if (storedScrollPosition) {
//       window.scrollTo(0, storedScrollPosition);
//     }
//   });
  
//   window.onbeforeunload = function(e) {
//     // Get Current Scroll Position
//     let scrollPosition = window.pageYOffset || window.scrollY;
    
//     // Store Scroll Position
//     localStorage.setItem('scrollPosition', scrollPosition);
    
//     // Update URL with scroll position
//     history.pushState(null, null, '#feed='+ scrollPosition);
//     console.log(scrollPosition)
//   };  