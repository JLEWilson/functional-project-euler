// recursive function from 1 -> target
// check if number % target === 0
// check if it's prime
// check if it's larger than the last prime number

// target is 600851475143

// stack overflow version
const isPrime = (num) => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return num !== 1;
}

const primeCursion = (target) => {
  return (factor = 0) => {
    return (i = 2) => {
      if (i === target) {
        return factor;
      }
      if (target % i === 0 && isPrime(i)) {
        return primeCursion(target)(i)(i+1);
      } else {
        return primeCursion(target)(factor)(i+1);
      }
    }
  }
}


console.log(primeCursion(13195)()()); // should be 29
console.log(primeCursion(600851475143)()()); // stack error

// 4 years version
const isPrime = (num) => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return num !== 1;
}


function bigPrime(input) {
  let answer = 0;
  for (let i = 2; i <= input; i++) {
    console.log(i);
    if (input % i === 0 && isPrime(i)) {
      answer = i;
    }
  }
  return answer;
}

console.log(bigPrime(600851475143));

/////
function nestedPrime(input) {
  let answer = 0;
  for (let i = 2; i <= input; i++) {
    console.log(i);
    if (input % i == 0) {
      for (let j = 2; j < i; j++) {
        if (i % j === 0) break;
      }
      answer = i;
    }
  }
  return answer;
}

//// fastest solution?
function largestprime(n) {
  let i = 2;
  while(i <= n) {
    if (n % i == 0) {
      n /= i;
    } else {
      i = (i == 2) ? 3 : i + 2;
    }
  }
  console.log(i)
}

//// recurrysive answer?
const recurPrime = (compare) => {
  return (answer = 0) => {
    return (factor = 2) => {
      if (answer > compare) {
        return answer;
      }
        if (compare % factor === 0) {
          return recurPrime(compare / factor)(factor)(factor);
        } else {
          return recurPrime(compare)(answer)((factor === 2) ? 3 : factor + 2);
        }
    }
  }
}

console.log(recurPrime(600851475143)()()); // 6857