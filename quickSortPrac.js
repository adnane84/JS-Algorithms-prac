// // QuickSort practice:

// QuickSort with a Big-O = O(n log n)

function quickSort(array) {
  if (array.length <= 1) {
    return array;
  }

  let pivot = array[0];
  let left = [];
  let right = [];
  let zeros = [];
  for (let i = 1; i < array.length; i++) {
    if (array[i] !== 0) {
      if (array[i] < pivot) {
        left.push(array[i]);
      } else {
        right.push(array[i]);
      }
    } else {
      zeros.push(array[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right), ...quickSort(zeros)];
}

console.log(quickSort([9, 16, 0, 0, 7, 3, 0, -2, 5, 15, 8, 7, 8, 2]));
  // [-2, 2, 3,  5,  7, 7, 8, 8, 9, 15, 16, 0, 0, 0]

  
