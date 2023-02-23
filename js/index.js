
let botonLeerMas = document.getElementById('botonLeerMas')

let hideText = document.getElementById('hideText')

botonLeerMas.addEventListener('click', toggleText);

function toggleText(){
    hideText.classList.toggle('show');

    if(hideText.classList.contains('show')){
        botonLeerMas.innerHTML = 'Leer menos'
    }
    else {
        botonLeerMas.innerHTML = 'Leer mas'
    }
}

const irArriba = document.querySelector(".irArriba")

irArriba.addEventListener('click', () => {
    document.documentElement.scrollTop = 0;
})

window.addEventListener("scroll",() => {
    if (window.scrollY < 500) {
        irArriba.style.right = -100 + "px";
        } else {
            irArriba.style.right = 5 + "px";
        }
});