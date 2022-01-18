// kth largest
// sorting the array, kth largest O(nlogn)
// [1, 45, 89, 5, 67, -14, 78], 3

const kLargest = (arr, k) => {
    if (!arr.length || !(k >= 1 && k <= arr.length)) {
        return null;
    }
    // Sort the array in descending order
    arr.sort((a, b) => b - a);
    return arr[k-1];
}

console.log(kLargest([1, 45, 89, 5, 67, -14, 78], 3)); // 67
console.log(kLargest([1, 45, 89, 5, 67, -14, 78], 7)); // -14
console.log(kLargest([1, 45, 89, 5, 67, -14, 78], 1)); // 89
console.log(kLargest([1, 45, 89, 5, 67, -14, 78], 0)); // null
console.log(kLargest([1, 45, 89, 5, 67, -14, 78], 8)); // null
console.log(kLargest([45], 1)); // 45
console.log(kLargest([], 3)); // null
