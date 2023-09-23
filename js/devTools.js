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


  







/*------------------------------------------------
            DETECT SCREEN RESOLUTION
------------------------------------------------*/
// Detect screen resolution
let screenHeight = window.screen.availHeight;
let screenWidth = window.screen.availWidth;

// Create an object with the data
let screenData = {
  height: screenHeight,
  width: screenWidth
};

// Convert the data to JSON
let jsonData = JSON.stringify(screenData);

// Send the data to the server
fetch('http://127.0.0.1:5500', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: jsonData
}).then(response => {
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
}).then(data => {
  console.log('Success:', data);
}).catch((error) => {
  console.error('Error:', error);
});