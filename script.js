// 

const hamburger = document.querySelector('.hamburger');
const mynav = document.querySelector('.mynav');

hamburger.addEventListener('click', () => {
  //hamburger.classList.toggle('active'); // Toggle hamburger icon
  mynav.classList.toggle('mynav');   // Toggle the menu visibility
 // mynav.classList.to('mynav');   // Toggle the menu visibility
});