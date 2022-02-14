/* [12, 56, 45, 1, 78, 90], 
d = 2, res = [45, 1, 78, 90, 12, 56]
d = 7, res = [56, 45 ... , 12]
// t = i
// i - d = i
// i - d + 
We traverse it from start index = d, 
we push value to new array, 
then we iterate again from 0 to d - 1
*/

const rotateArray = (arr, d) => {
    if (!arr.length) {
        return [];
    }
    const n = arr.length;
    d = d % arr.length; // d = 2, arr.length = 6, d = 1
    let c = 0;
    for (let i = d; i < n; i++) {
        console.log(i, n - 1 + d - i, c);
        const temp = arr[i - d];
        arr[i - d] = arr[i];
        console.log(i - d, arr[i - d]);
        if (c < d) {
            arr[n - 1 + d - i] = temp;
            console.log(i, n -1 + d - i, temp, arr[n - 1 + d - i])
            c++;
        }
    }
    return arr;
}

//console.log(rotateArray([12, 56, 45, 1, 78, 90], 2));
console.log(rotateArray([12, 56, 45, 1, 78, 90], 7));