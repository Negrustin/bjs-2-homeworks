"use strict"
function solveEquation(a, b, c) {
  const arr = [];
  const discriminant = Math.sqrt(b) - (4 * a * c);

  if (discriminant === 0) {
    arr.push(b * -1 / 2 * a);
  } else if (discriminant > 0) {
    arr.push(((b * -1) + Math.sqrt(discriminant)) / (2 * a));
    arr.push((b * -1 - Math.sqrt(discriminant)) / (2 * a));

//hello
  }

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let resultCreditSum = 0;
g
  if (!typeof (percent / 1).isNaN || !typeof (contribution / 1).isNaN || !typeof (amount / 1).isNaN || !typeof (countMonths / 1).isNaN) {
    return null;
  } else {

  const monthPrecent = percent / 12 / 100;




  }











}

