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

// The quickSort function you provided has a time complexity of O(n log n) in the average and best cases,
//  and O(n^2) in the worst case.

// // The implementation of the function is based on the quicksort algorithm, which involves dividing the array into smaller subarrays,
// sorting them recursively, and then combining them to form the final sorted array.
// In this implementation, the pivot is selected as the first element of the array,
// and the other elements are partitioned into two subarrays: elements smaller than the pivot are placed in the "left" array,
// and elements larger than the pivot are placed in the "right" array. Additionally, there is a third array
// for handling elements equal to zero. The quicksort algorithm is then applied recursively to the left and right subarrays,
// as well as to the array of zeros, until all subarrays have length 1 or 0,
// at which point they are combined to form the final sorted array.

// The implementation of this function has a time complexity of O(n log n) in the average and best cases because
// the partitioning of the array is relatively balanced. In each recursive call, the array is partitioned into two subarrays
// that are roughly half the size of the original array. This leads to log n levels of recursion,
// and each level requires O(n) time for the partitioning operation, resulting in a total time complexity of O(n log n).

// However, in the worst case, the partitioning of the array can be highly unbalanced, leading to a time complexity of O(n^2).
// For example, if the pivot is always selected as the maximum or minimum element in the array,
// then the left or right subarray will always have length n-1,
// and the algorithm will need to recursively sort an array of length n-1,
// resulting in a worst-case time complexity of O(n^2).

// In summary, the quickSort function you provided has a time complexity of O(n log n) in the average and best cases,
// and O(n^2) in the worst case.


// const array1 = [3, 7, 1, 4, 9, 2, 6, 5, 8]; // [1, 2, 3, 4, 5, 6, 7, 8, 9]
// const array2 = [5, 3, 1, 4, 2]; [ 1, 2, 3, 4, 5 ]


function quickSort(array) {
  if (array.length <= 1) {
    return array;
  }
  let pivotIndex = Math.floor(Math.random(array.length));
  let pivot = array[pivotIndex];
  let left = [];
  let right = [];
  for (let i = 0; i < array.length; i++) {
    if (i === pivotIndex) {
      continue;
    }
    if (array[i] < pivot) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }

  }
  const leftSort = quickSort(left);
  const rightSort = quickSort(right);

  return [...leftSort, pivot, ...rightSort];
}
