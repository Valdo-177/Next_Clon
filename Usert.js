const Userr = document.getElementById("Userr");

Userr.addEventListener("click", () => {
  console.log("helo");
});

const inputs = document.querySelectorAll("input[type='number']");

inputs.forEach((input, index) => {
  input.addEventListener("input", () => {
    const inputValue = input.value;

    if (inputValue.length === 1 && index < inputs.length - 1) {
      inputs[index + 1].focus();
    }

    if (index === inputs.length - 1 && inputValue.length === 1) {
      input.blur(); // Quitar el enfoque del último campo después de ingresar un carácter
    }
  });

  // Controlar el retroceso para cambiar al campo anterior
  input.addEventListener("keydown", (e) => {
    if (e.key === "Backspace" && index > 0) {
      inputs[index - 1].focus();
    }
  });
});

const no = document.getElementById("no");
const na = document.getElementById("na");
const bola = document.getElementById("bola");
const tam = document.getElementById("tam");

no.addEventListener("click", () => {
  console.log("hello");
  window.location.href = "#2";
  bola.style.top = "25%";
  bola.style.left = "5%";
  bola.style.background = "#181818";
});
na.addEventListener("click", () => {
  console.log("hello");
  window.location.href = "#3";
  bola.style.bottom = "5%";
  bola.style.background = "#ff8800";
});

tam.innerText = `Tamaño de pantalla a lo alto ${screen.height} y tamaño a lo ancho ${screen.width}`;
