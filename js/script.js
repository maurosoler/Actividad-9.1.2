// Array extraño
const strangeArray = [
  "Zero",
  function () {
    alert("Hola soy una función en un array");
  },
  22,
  null,
  "Go lang",
  undefined,
  "Cobol",
  "I'm programmer",
  -2000,
  "Hello world",
  `One is ${1}`,
  { name: "Info", lastname: "last info" },
  () => true,
  function showNumbers() {
    return "1, 2, 3, 4";
  },
  "Another String",
  ["Hola mundo!"],
  "b is a letter",
  "JavaScript",
];

// Función que recibe por parámetro un array y muestra sus elementos en pantalla
function showList(array) {
  const container = document.getElementById("list");
  container.innerHTML = "";

  // Acá está la solución ! Primero filtramos solamente los Strings, luego los ordenamos
  const arrayFiltrado = array.filter((element) => typeof element === "string");
  const arrayOrdenado = arrayFiltrado.sort( (a,b) => {return a.localeCompare(b) }) ;
  //------------------------------------------------------------------------------------
  arrayOrdenado.forEach((element) => {    //Se cambió "array.forEach" x "arrayOrdenado.forEach"
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(element));
    container.appendChild(li);
  });
}

document.addEventListener("DOMContentLoaded", (e) => {
showList(strangeArray);
});
