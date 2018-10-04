// Print the sum of all integers between 1 and 10.

var listaNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(sumList(listaNum));

function sumList (listaNum) {
  var sum = 0;
  for (var i = 0; i < listaNum.length; i++) {
    sum = sum + listaNum[i];
  }
  return sum;
}
