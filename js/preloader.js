// Wait for the window to load completely
window.onload = function () {
    // Set a variable to represent the preloader element
    var preloader = document.querySelector(".preloader");

    // Use CSS transitions to fade out the preloader
    preloader.style.transition = "opacity 1s";

    // Hide the preloader after a delay (1 second in this case)
    setTimeout(function () {
        preloader.style.opacity = "0";
        // After the fade out, hide the preloader completely
        setTimeout(function () {
            preloader.style.display = "none";


            // Allow scrolling after the page is loaded
            document.body.style.overflow = "auto";
        }, 1000); // You can adjust the delay here if needed
    }, 1000);
}

// Prevent scrolling until the page is fully loaded
document.body.style.overflow = "hidden";





// ###       ##       ######## ######## ########  ##    ##    ###    ######## #### ##     ## ######## 
// ## ##     ##          ##    ##       ##     ## ###   ##   ## ##      ##     ##  ##     ## ##       
// ##   ##   ##          ##    ##       ##     ## ####  ##  ##   ##     ##     ##  ##     ## ##       
// ##     ## ##          ##    ######   ########  ## ## ## ##     ##    ##     ##  ##     ## ######   
// ######### ##          ##    ##       ##   ##   ##  #### #########    ##     ##   ##   ##  ##       
// ##     ## ##          ##    ##       ##    ##  ##   ### ##     ##    ##     ##    ## ##   ##       
// ##     ## ########    ##    ######## ##     ## ##    ## ##     ##    ##    ####    ###    ######## 


// document.documentElement.classList.add("js");

// // Dom is loaded
// jQuery(document).ready(function($) {  

// // Fade out preloader
// $('#preloader').fadeOut('slow',function(){$(this).remove();});

// });
















// // Create the preloader div
// var preloader = document.createElement("div");
// preloader.className = "preloader";

// // Create the yin-yang-loader div and its child img element
// var yinYangLoader = document.createElement("div");
// yinYangLoader.className = "yin-yang-loader";
// var img = document.createElement("img");
// img.src = "assets/favicon.svg";
// yinYangLoader.appendChild(img);

// // Append the yin-yang-loader to the preloader
// preloader.appendChild(yinYangLoader);

// // Append the preloader to the body
// document.body.appendChild(preloader);

// // Apply styles to the img element
// img.style.height = "15vh";
// img.style.aspectRatio = "1/1";
// img.style.animation = "spin 3s infinite";

// // Create the spin animation
// var spinAnimation = document.createElement("style");
// spinAnimation.innerHTML = `
// @keyframes spin {
//    0% {
//       transform: rotate(0deg);
//    }

//    100% {
//       transform: rotate(360deg);
//    }
// }`;
// document.head.appendChild(spinAnimation);

// // Adjust the styles based on the viewport width
// window.addEventListener("resize", function() {
//    if (window.innerWidth <= 600) {
//       img.style.height = "7.5vh";
//    } else if (window.innerWidth > 600 && window.innerWidth <= 900) {
//       img.style.height = "10vh";
//    } else {
//       img.style.height = "15vh";
//    }
// });

// // Prevent scrolling until the page is fully loaded
// document.body.style.overflow = "hidden";

// // Wait for the window to load completely
// window.onload = function () {
//     // Use CSS transitions to fade out the preloader
//     preloader.style.transition = "opacity 1s";

//     // Hide the preloader after a delay (1 second in this case)
//     setTimeout(function () {
//         preloader.style.opacity = "0";
//         // After the fade out, hide the preloader completely
//         setTimeout(function () {
//             preloader.style.display = "none";

//             // Allow scrolling after the page is loaded
//             document.body.style.overflow = "auto";
//         }, 1000); // You can adjust the delay here if needed
//     }, 1000);
// }
