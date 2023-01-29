"use strict"
function solveEquation(a, b, c) {
  const arr = [];
  const discriminant = (b** 2) - (4 * a * c);

  if (discriminant === 0) {
    arr.push(b * -1 / 2 * a);
  } else if (discriminant > 0) {
    arr.push(((b * -1) + Math.sqrt(discriminant)) / (2 * a));
    arr.push((b * -1 - Math.sqrt(discriminant)) / (2 * a));
    
  }

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {


}

