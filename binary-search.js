const bs = (arr, item) => {
    if (!arr.length) {
        return -1;
    }
    if (arr.length === 1) {
        return arr[0] === item ? 0 : -1;
    }
    let low = 0, high = arr.length - 1, mid = parseInt((low + high) / 2);
    if (arr[low] > item || arr[high] < item) {
        return -1;
    } 
    while (low <= high) {
        mid = parseInt((low + high) / 2);
        if (arr[mid] < item) {
            low = mid + 1;
        } else if (arr[mid] > item) {
            high = mid - 1;
        } else {
            return mid;
        }
    }
    //console.log(low, item);
    return -1;
};

console.log(bs([2, 12, 13, 60, 67, 74, 80], 12)) // 1
console.log(bs([2, 12, 13, 60, 67, 74, 80], 13)) // 2
console.log(bs([2, 12, 13, 60, 67, 74, 80], 1)) // -1
console.log(bs([2, 12, 13, 60, 67, 74, 80], 81)) // -1
console.log(bs([2, 12, 13, 60, 67, 74, 80], 64)) // -1