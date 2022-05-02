let datoBase = document.getElementById("datoBase");
let datoAltura = document.getElementById("datoAltura");
let btnCalcular = document.getElementById("btnCalcular");

btnCalcular.addEventListener("click", () => {
  console.log(
    "El area de su rectangulo es:",
    datoBase.value * datoAltura.value
  );
});
