const Flowers Shop = document.querySelector(".flowers");
const navMenu = document.querySelector(".nav-menu");

flowers.addEventListener("click", mobileMenu);

function mobileMenu() {
    flowers.classList.toggle("active");
    navMenu.classList.toggle("active");
}
var current, array;


current = ['https://thumbs.dreamstime.com/b/bouquet-beautiful-garden-flowers-leaves-butterfly-black-background-luxurious-baroque-pink-white-peonies-roses-tulips-172318631.jpg', 'https://thumbs.dreamstime.com/b/vibrant-bouquet-flowers-3193593.jpg', 'https://thumbs.dreamstime.com/b/bouquet-colorful-flowers-tulips-roses-lilac-narcissus-li-vase-lily-blossoms-over-white-background-51157785.jpg'];
let element_list = document.getElementById('list');
let new_img = document.createElement('img');
let element_image = document.getElementById('image');
element_image.setAttribute("src", array[0]);

element_list.appendChild(new_img);


document.getElementById('button').addEventListener('click', (event) => {
  current = array.pop();
  let element_list2 = document.getElementById('list');
  element_list2.setAttribute("src", current);
  array.unshift(current);

});

document.getElementById('button 2').addEventListener('click', (event) => {
  current = array.shift();
  let element_list3 = document.getElementById('list');
  element_list3.setAttribute("src", current);
  array.push(current);

});
