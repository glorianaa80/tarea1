const btnSave = document.getElementById('save');
const name1 = document.getElementById('name');
const type1 = document.getElementById('type');
const date1 = document.getElementById('date');
const amount1 = document.getElementById('amount');
const tablaName = document.getElementById('table-name');
const tablaType = document.getElementById('table-type');
const tablaAmount = document.getElementById('table-amount');
const lista = [];
const copyArray = lista.slice();
const factura = document.getElementById('factura');

function save() {
  let fila = '';
  const nuevaFila = {
    name: name1.value,
    type: type1.value,
    date: date1.value,
    amount: parseInt(amount1.value),
  };
  lista.push(nuevaFila);

  for (let i = 0; i < lista.length; i += 1) {
    fila += `<tr><td> ${lista[i].name} </td><td>  ${lista[i].type} </td><td> ${lista[i].date} </td><td> ${lista[i].amount} </td></tr>`;
  }
  factura.innerHTML = fila;
  totalFinalA();
  totalFinalB();
  totalFinalC();
  
  console.log(lista.sort(((prev, next) => {
    if (prev.name > next.name) {
      return 1;
    }
    if (prev.name < next.name) {
      return -1;
    }
    return 0;
  })));
}

let h = 0;
function totalFinalA() {
  lista.forEach(function (e, index, arreglo) {
      const totalA = document.getElementById('a');
      if (type1.value === 'A') {
        totalA.innerHTML = parseInt(`${arreglo[h].amount} +  ${arreglo[h].amount} `);
        h += 1;
      }
    });
}

function totalFinalB() {
  lista.forEach(function (e, index, arreglo2) {
    const totalA = document.getElementById('b');
    if (type1.value === 'B') {
      totalA.innerHTML = parseInt(arreglo2[h].amount + amount);
      h += 1;
    }
  });
}

function totalFinalC () {
    lista.forEach(function (e, index, arreglo3) {
    const totalA = document.getElementById('c');
    if (type1.value === 'C') {
      totalA.innerHTML = parseInt(arreglo3[h].amount + amount);
      h += 1;
    }
  });
}

btnSave.addEventListener('click', save);
tablaName.addEventListener('click', document.write(copyArray.sort()));


// function sortNameHaciaABAJO() {
//   ;
//   console.log('5452');
// }

// tablaName.addEventListener ('click', lista.sort((a, b) => a.name.localCompare(b.name)) );
// tablaName.addEventListener ('click', lista.sort((a, b) => b.name.localCompare(a.name)));
// function suma() {
//   if (type1[0].value === true) {
//     const totalA = document.getElementById('a');
//     totalA.innerHTML = type1[0].value;
//   }
// }
