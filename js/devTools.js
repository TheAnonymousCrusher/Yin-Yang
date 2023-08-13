/*------------------------------------------------
                SCREEN RESOLUTION
------------------------------------------------*/

// Debounce function to delay function execution
function debounce(func, delay) {
    let timeoutId;
    return function() {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(func, delay);
    };
  }
  
  // Function to log screen resolution on window resize
  function logScreenResolution() {
    // Get the screen width and height using the window.innerWidth and window.innerHeight properties
    var screenWidth = window.innerWidth;
    var screenHeight = window.innerHeight;
  
    // Log the screen resolution to the console
    console.log("Screen Resolution: " + screenWidth + "px × " + screenHeight + "px");
  }
  
  // Create a debounced version of logScreenResolution function
  const debouncedLogScreenResolution = debounce(logScreenResolution, 300); // Adjust the delay as needed (300ms in this case)
  
  // Call the debounced function initially to log when the page loads
  debouncedLogScreenResolution();
  
  // Add an event listener to the window's resize event to log the screen resolution on resize
  window.addEventListener("resize", debouncedLogScreenResolution);  