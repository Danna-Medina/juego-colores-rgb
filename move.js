let numeroN = 6;

let colors = generateRandomColors(6);
let cuad = document.querySelectorAll(".square");

let pickedColor = pickColor(6);
let span = document.querySelector("#colorDisplay");

let clickedColor;
let span2 = document.querySelector("#message");

let titulo = document.querySelector("h1");

let juegoFinal = pickedColor;


let reinicio = document.querySelector("#reset");
let sencillo = document.querySelector("#easy");
let dificil = document.querySelector("#hard");


inicio()
function inicio() {
    for (let i = 0; i < cuad.length; i++) {
        cuad[i].style.backgroundColor = colors[i];
        span.textContent = pickedColor;
        cuad[i].style.opacity = "1";
        cuad[i].addEventListener("click", function () {
            clickedColor = this.style.backgroundColor;

            if (clickedColor == pickedColor) {
            titulo.style.backgroundColor = this.style.backgroundColor;
            span2.textContent = "¡Correcto!";
            reinicio.textContent = "Reiniciar juego";
            changeColors(pickedColor);
            
            } 
            
            else {
            this.style.opacity = "0";
            span2.textContent = "INTENTA OTRA VEZ";
            
            reinicio.textContent = "Reiniciar juego";
            }
        });
    }
}

function randomColor() {
    r = Math.round(Math.random() * 255);
    g = Math.round(Math.random() * 255);
    b = Math.round(Math.random() * 255);
    rgb = `rgb(${r}, ${g}, ${b})`;
    return rgb;
}

function generateRandomColors(numeroN) {
    let arrayColor = [];
    for (let i = 0; i < numeroN; i++) {
        arrayColor.push(randomColor());
    }
    return arrayColor;
}

function changeColors(color) {
    for (let i = 0; i < cuad.length; i++) {
      cuad[i].style.backgroundColor = color;
      cuad[i].style.opacity = "1";
    }
}

function pickColor(numeroN) {
    let numeroRandom = Math.round(Math.random() * (numeroN - 1));
    return colors[numeroRandom];
}

reinicio.addEventListener("click", function () {
    reinicio.textContent = "Comenzar de nuevo";
    span2.textContent = "Vamos a comenzar el juego";
    titulo.style.backgroundColor = "#7e66a3";
    colors = generateRandomColors(numeroN);
    pickedColor = pickColor(numeroN);
    juegoFinal = pickedColor;
    inicio()
  });

sencillo.addEventListener("click", function () {
  dificil.classList.remove("seleccionar");
  sencillo.classList.add("seleccionar");
  reinicio.textContent = "Mezclar colores";
  titulo.style.backgroundColor = "#7e66a3";
  span2.textContent = "Vamos a comenzar el juego";


  numeroN = 3;
  colors = generateRandomColors(numeroN);
  pickedColor = pickColor(numeroN);
  juegoFinal = pickedColor;
  
  for (let i = 0; i < cuad.length; i++) {
    cuad[i].style.opacity = "1";

    if (!colors[i] == "") {
      cuad[i].style.backgroundColor = colors[i];
      span.textContent = pickedColor;
      cuad[i].addEventListener("click", function () {
        clickedColor = this.style.backgroundColor;

        if (clickedColor == pickedColor) {
          titulo.style.backgroundColor = this.style.backgroundColor;
          span2.textContent = "¡Correcto!";
          changeColors(pickedColor);
          reinicio.textContent = "Reiniciar juego";
        } 
        else {
          this.style.opacity = "0";
          span2.textContent = "INTENTAR OTRA VEZ";
        }
      });

    } 
    
    else {
      cuad[i].style.display = "none";
    }
  }
});

dificil.addEventListener("click", function () {
  sencillo.classList.remove("seleccionar");
  dificil.classList.add("seleccionar");
  reinicio.textContent = "Mezclar colores";
  titulo.style.backgroundColor = "#7e66a3";
  span2.textContent = "Vamos a comenzar el juego";
 
  numeroN = 6;
  colors = generateRandomColors(numeroN);
  pickedColor = pickColor(numeroN);
  juegoFinal = pickedColor;

  for (let i = 0; i < cuad.length; i++) {
    cuad[i].style.opacity = "1";
    cuad[i].style.display = "block";
    cuad[i].style.backgroundColor = colors[i];
    span.textContent = pickedColor;

    cuad[i].addEventListener("click", function () {
      clickedColor = this.style.backgroundColor;
      if (clickedColor == pickedColor) {
        titulo.style.backgroundColor = this.style.backgroundColor;
        span2.textContent = "¡Correcto!";
        changeColors(pickedColor);
        reinicio.textContent = "Reiniciar juego";
      } 
      
      else {
        this.style.opacity = "0";
        span2.textContent = "Reiniciar juego";
      }
    });
  }
});
  
