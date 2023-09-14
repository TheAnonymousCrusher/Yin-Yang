// Function to open the mobile menu
function openMobileMenu() {
    document.body.classList.add('menu-open');
  }
  
  // Function to close the mobile menu
  function closeMobileMenu() {
    document.body.classList.remove('menu-open');
  }
  
  // Event listener for the menu button
  document.getElementById('nav-check').addEventListener('change', function() {
    if (this.checked) {
      openMobileMenu();
    } else {
      closeMobileMenu();
    }
  });