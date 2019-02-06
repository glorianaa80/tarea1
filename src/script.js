const btnSave = document.getElementById('save');
const name1 = document.getElementById('name');
const type1 = document.getElementById('type');
const date1 = document.getElementById('date');
const amount1 = document.getElementById('amount');
// const tablita = document.getElementById('tablita');
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
}
btnSave.addEventListener('click', save);
console.log(type1[0].value)