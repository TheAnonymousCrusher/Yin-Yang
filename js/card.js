document.querySelectorAll('.card').forEach(card => {
    let title = card.querySelector('.card-title');
    title.style.whiteSpace = 'nowrap';
    title.style.overflow = 'hidden';
    title.style.textOverflow = 'ellipsis';
    title.style.transition = 'all 1s'; // Set transition for 1 sec fade-in
  
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
    });
  });









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
