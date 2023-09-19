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
fetch('http://127.0.0.1:1010', {
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
