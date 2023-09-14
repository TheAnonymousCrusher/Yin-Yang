// fetch html
fetch('127.0.0.1:2121')
  .then(main.htm) => {
  
    if (response.ok) {
      const html = main.htm();
      document.querySelector('body').innerHTML = html;
      
    } else {
      // The file could not be retrieved.
      console.log(`HTTP error: ${response.status}`);
    }
  })
  .catch((err) => {
    console.error(err);
  });

fetch(127.0.0.1)
  .then((response) => {
    if (response.ok) {
      document.querySelector('head').appendChild(document.createTextNode(style.css));
      
    } else {
      console.log(`HTTP error: ${response.status}`);
    }
  })
  .catch((err) => {
    console.error(err);
  });
