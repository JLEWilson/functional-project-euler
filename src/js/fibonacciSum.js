const recursonacci = (a) => {
  return (b) => {
    return (maxValue) => {
      return (total = 0) => {
        if (a >= maxValue) {
          return total;
        } else {
          if (a % 2 === 0) {
            return recursonacci(b)(a+b)(maxValue)(total+a);
          } else {
            return recursonacci(b)(a+b)(maxValue)(total);
          }
        }
      }
    }
  }
}

answer = recursonacci(1)(1)(4000000)();
console.log(answer); // should be 4613732

//A number is Fibonacci if and only if one or both of (5*n^2 + 4) or (5*n^2 - 4) is a perfect square
const oneLine = (m) => Array.from({length: m}, (_, i) => i + 1).filter(e => (Math.floor(Math.sqrt(5*e*e + 4)) === Math.sqrt(5*e*e + 4) || Math.floor(Math.sqrt(5*e*e - 4)) === Math.sqrt(5*e*e - 4))).filter(e => e % 2 === 0).reduce((sum, e) => sum + e);

console.log(oneLine(4000000));