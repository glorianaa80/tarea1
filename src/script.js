const btnSave = document.getElementById('save');
const name1 = document.getElementById('name');
const type1 = document.getElementById('type');
const date1 = document.getElementById('date');
let amount1 = document.getElementById('amount');
let tablaName = document.getElementById('table-name'); 
let tablaType = document.getElementById('table-type');
let tablaDate = document.getElementById('table-date');
let tablaAmount = document.getElementById('table-amount');

const lista = [];
function save() {
  const factura = document.getElementById('factura');
  let fila = '';
  const nuevaFila = {
    name: name1.value,
    type: type1.value,
    date: date1.value,
    amount: amount1.value,
  };
  lista.push(nuevaFila);
  for (let i = 0; i < lista.length; i += 1) {
    fila += `<tr><td> ${lista[i].name} </td><td>  ${lista[i].type} </td><td> ${lista[i].date} </td><td> ${lista[i].amount} </td></tr>`;
  }
  factura.innerHTML = fila;
  suma();
  // suma1();
  // suma2();
  
}
btnSave.addEventListener('click', save);

console.log(lista.sort(function (prev, next){
  if (prev.name > next.name){
    return 1;
  }
  if(prev.name < next.name){
    return -1;
  }
  return 0;
}))


// function sortNameHaciaABAJO() {
//   ;
//   console.log('5452');
// }

// tablaName.addEventListener ('click', lista.sort((a, b) => a.name.localCompare(b.name)) );
// tablaName.addEventListener ('click', lista.sort((a, b) => b.name.localCompare(a.name)));
function suma() {
  if (type1[0].value === true) {
    const totalA = document.getElementById('a');
    totalA.innerHTML = type1[0].value;
  };
};

function suma() {
  if (type1[0].value === true) {
    const totalA = document.getElementById('a');
    totalA.innerHTML = type1[0].value;
  };
};
// function suma1() {
//   if (type[1].value = false) {
//     const totalB = document.getElementById('b');
//     totalB.innerHTML = amount.value;
//   }
// };
// function suma2() {
//   if (type[2].value = false) {
//     const totalC = document.getElementById('c');
//     totalC.innerHTML = amount.value;
//   };
// };
