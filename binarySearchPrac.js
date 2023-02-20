let array = [1, 2, 3, 4, 5, 6, 7, 9, 10, 11];

function binarySearch(array, target, left, right) {
  if (left > right) {
    return -1
  }

  let mid = Math.floor((left + right) / 2)
  if(array[mid] === target) {
    return mid;
  } else if (array[mid] < target) {
    return binarySearch(array, target,mid + 1, right)
  } else {
    binarySearch(array, target, mid - 1, left)
  }
  
}

// console.log(binarySearch(array, 5, 0, 9));

function test(n) {
  let count = 0;
  let array = [0]
  array.length = (2**n);
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 0) {
      
    }
  }
}

function solution(n, b) {
  const numbers = [];
  for (let i = 1; i < 2 ** n; i++) {
    if (i & b) {
      numbers.push(i);
    }
  }
  return numbers;
}