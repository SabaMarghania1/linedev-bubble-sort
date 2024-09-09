const arr = [3, 5, 1, 9, 6, 4];

// 1 = [3,1,9,6,5,4]
// 2 = [1,3,6,9,4,5]
// 3 = [1,3,6,4,5,9]
// 4 = [1,3,4,5,6,9]

const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
};

console.log(bubbleSort(arr));
