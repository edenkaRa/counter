let contador = 0;

let numero = document.querySelector('.containerNum');
let increaseBtn = document.querySelector('.increaseButton');
let decreaseBtn = document.querySelector('.decreaseButton');

decreaseBtn.addEventListener('click', () => {
    contador--;
    numero.textContent = contador;
})
increaseBtn.addEventListener('click', () => {
    contador++;
    numero.textContent = contador;
})
