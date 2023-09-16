
document.querySelectorAll('.card').forEach(card => {
    let title = card.querySelector('.card-title');
    let description = card.querySelector('.card-description');

    title.style.whiteSpace = 'nowrap';
    title.style.overflow = 'hidden';
    title.style.textOverflow = 'ellipsis';
    title.style.transition = 'all 1s'; // Set transition for 1 sec fade-in
  
    description.style.whiteSpace = 'nowrap';
    description.style.overflow = 'hidden';
    description.style.textOverflow = 'ellipsis';
    description.style.transition = 'all 1s'; // Set transition for 1 sec fade-in


    card.addEventListener('click', () => {
      if (title.style.whiteSpace !== 'normal') {
        title.style.whiteSpace = 'normal';
        title.style.overflow = 'visible';
        title.style.textOverflow = 'clip';
      } else {
        title.style.whiteSpace = 'nowrap';
        title.style.overflow = 'hidden';
        title.style.textOverflow = 'ellipsis';
      }



      if (description.style.whiteSpace !== 'normal') {
        description.style.whiteSpace = 'normal';
        description.style.overflow = 'visible';
        description.style.textOverflow = 'clip';
      } else{
        description.style.whiteSpace = 'nowrap';
        description.style.overflow = 'hidden';
        description.style.textOverflow = 'ellipsis';
      }
    });
  });





  // When the modal is shown, disable scrolling on the body element
document.body.style.overflow = 'hidden';

// When the modal is hidden, enable scrolling on the body element
document.body.style.overflow = '';










// document.querySelectorAll('.card').forEach(card => {
// let title = card.querySelector('.card-title');
// let img = card.querySelector('.card-img').src;

// title.style.whiteSpace = 'nowrap';
// title.style.overflow = 'hidden';
// title.style.textOverflow = 'ellipsis';
// title.style.transition = 'all 1s ease'; // Added transition property

// card.addEventListener('click', () => {
//     if (title.style.whiteSpace !== 'normal') {
//     title.style.whiteSpace = 'normal';
//     title.style.overflow = 'visible';
//     title.style.textOverflow = 'clip';
    
//     document.body.style.backgroundImage = `url(${img})`;
//     document.body.style.backgroundSize = 'cover';
//     document.body.style.transition = 'all 1s ease'; // 1s transition
//     document.body.style.filter = 'blur(10px)';
//     } else {
//     title.style.whiteSpace = 'nowrap';
//     title.style.overflow = 'hidden';
//     title.style.textOverflow = 'ellipsis';
    
//     document.body.style.backgroundImage = '';
//     document.body.style.filter = '';
//     }
// });
// });
