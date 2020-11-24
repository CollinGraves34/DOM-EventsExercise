// DOM EVENTS EXERCISE


const button1 = document.querySelector('button');

button1.onclick = () => alert('You Clicked Button One');

const button2 = document.querySelector('#two');

button2.addEventListener('dblclick', () => {
  alert('You DOUBLE Clicked The Second Button!!!')
});

// BONUS
const form = document.querySelector('form');

form.addEventListener('submit', () => {
  const username = form.elements.username.value;
  alert(form.elements.username.value);
});

const darkMode = document.getElementById('dm');

const allElements = document.querySelectorAll('*');

console.log(allElements);
darkMode.addEventListener('click', () => {
  for (element of allElements){
    element.classList.toggle('dark-mode');
  }
});




