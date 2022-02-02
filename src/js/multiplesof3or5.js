// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below 1000.

const oneLine = (maxValue) => Array.from({length: maxValue - 1}, (_, i) => 1 + i).filter(e => e % 3 === 0 || e % 5 === 0).reduce((sum, e) => sum + e);

//Curry and recursion
const sumMultiples = (x) => {
  return (y) => {
    return (maxValue) => {
      if(sanitizer(x) && sanitizer(y) && sanitizer(maxValue)) {
        return multiples(maxValue, x, y);
      } else {
        return "Pwease use a number..."
      }
    }
  }
}
const sanitizer = (value) => {
  return !(typeof value !== 'number' || value !== value || value === Infinity || value === -Infinity);
}
const multiples = (maxValue, x, y) => {
  if(maxValue < x && maxValue < y) {
    return 0;
  }else {
    if (maxValue % x === 0 || maxValue % y === 0) {
      return maxValue + multiples(maxValue-1, x, y);
    } else {
      return multiples(maxValue-1, x, y)
    }
  }
}

//recurry
const sumMultiplesToTotal = (x) => {
  return (y) => {
    return (maxValue) => {
      if(maxValue < x && maxValue < y) {
        return 0;
      }else {
        if (maxValue % x === 0 || maxValue % y === 0) {
          return maxValue + sumMultiplesToTotal(x)(y)(maxValue-1);
        } else {
          return sumMultiplesToTotal(x)(y)(maxValue-1);
        }
      }
    }
  }
}
const threeAndFive = sumMultiplesToTotal(3)(5);
const toThousand = threeAndFive(1000);
const multiplesOf3and5 = sumMultiples(3)(5);
const sumOf3and5to1000 = multiplesOf3and5(1000);
console.log(sumOf3and5to1000);
console.log(oneLine(1000));