//Print all odd integers between 0 and 30.

function oddNumbers (minValue, maxValue) {
  var odds = [];
  for (var i = minValue; i < maxValue; i++) {
    if (i % 2 == 1) {
      odds.push(i);
    }
  }
  return odds;
}

console.log(oddNumbers(15, 30));
