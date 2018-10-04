// Pega o maior elemento de uma lista
function maxNumber(lista) {
  var max = 0;
  for (var i = 0; i < lista.length; i++) {
    if (lista[i] > max) {
      max = lista[i];
    }
  }

  return max;
}

function maxOfLists(lista, outraLista) {
  var maxLista = maxNumber(lista);
  var maxOutraLista = maxNumber(outraLista);

  if (maxLista > maxOutraLista) {
    return maxLista;
  }
  return maxOutraLista;
}

var lista = [1, 2, 3, 4, 5, 6];
var outraLista = [10, 20, 37, 48];

var maiorDeTodos = maxOfLists(lista, outraLista);

console.log(`${maiorDeTodos} é o maior elemento das listas!`);
