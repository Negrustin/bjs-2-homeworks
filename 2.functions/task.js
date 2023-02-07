"use strict";
function getArrayParams(...arr) {
    if (arr.length == 0) {
        return 0;
    }
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    let sum = 0;
    arr.forEach(element => {
        sum += element;
    });
    let avg = parseFloat((sum / arr.length).toFixed(2));


    return {
        "min": min,
        "max": max,
        "avg": avg

    };

}


// найти сумму элементов в массиве
function summElementsWorker(...arr) {
    let sum = 0;
    arr.forEach(element => {
        sum += element;
    });
    return sum;
}
//Найти сумму разницу минимального и максимального 
function differenceMaxMinWorker(...arr) {
    if (arr.length == 0) {
        return 0;
    }
    let max = Math.max(...arr);
    let min = Math.min(...arr);

    let differenceMaxMin = max - min;

    return differenceMaxMin;

}



// найти разничу четных и и нечеиных элементов
function differenceEvenOddWorker(...arr) {
    let evenSum = 0;
    let oddSum = 0;

    arr.forEach(element => {
        if (element % 2 == 0) {
            evenSum += element;
        } else {
            oddSum += element;
        }
    });
    return evenSum - oddSum;
}





// найти среднее значение четных элементов
function averageEvenElementsWorker(...arr) {
    if (arr.length == 0) {
        return 0;
    }
    let sumEvenElements = 0;
    let counter = 0;
    arr.forEach(element => {
        if (element % 2 == 0) {
            sumEvenElements += element;
            counter++;
        }
    });
    return sumEvenElements / counter;
}



function makeWork(arrOfArr, func) {
    let max = -Infinity;
    if (arrOfArr.length == 0) {
        return 0;
    }
    for (let i = 0; i < arrOfArr.length; i++) {
        if (func(...arrOfArr[i]) > max) {
            max = func(...arrOfArr[i]);
        }
    }
    return max;

}



