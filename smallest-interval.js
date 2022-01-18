/*
Given a set of closed intervals, find the smallest set of numbers that covers all the intervals. 
If there are multiple smallest sets, return any of them.
For example, given the intervals [0, 3], [2, 6], [3, 4], [6, 9], 
one set of numbers that covers all these intervals is {3, 6}
*/

const getSmallestInterval = arr => {
    if (!(Array.isArray(arr) && arr.length)) {
        return [];
    }
    if (arr.length === 1 && Array.isArray(arr[0]) && arr[0].length === 2) {
        return [arr[0][0], arr[0][1]];
    } else if (
        arr.length === 2 && Array.isArray(arr[0]) && arr[0].length === 2 &&
        Array.isArray(arr[1]) && arr[1].length === 2
    ) {
        // If rs < ls, swap them
        // Case 1: Left & Right do not intersect
        // Case 2: Left & Right intersect and are equal
        // Case 3: Left & Right intersect but left covers right
        // Case 4: Left & Right intersect but right covers left
        // Case 5: Left & Right intersect and neither one covers the other
        let
            ls = arr[0][0],
            le = arr[0][1],
            rs = arr[1][0],
            re = arr[1][1];
        if (rs < ls) {
            ls = ls + rs;
            rs = ls - rs;
            ls = ls - rs;
            le = le + re;
            re = le - re;
            le = le - re;
        }
        if (le < rs) {
            return [le, rs];
        } else if (ls === rs && le === re) {
            return [ls, re];
        } else if (ls === rs && le > rs) {
            return [ls, le];
        } else if (ls === rs && le < re) {
            return [ls, re];
        } else {
            return [rs, le];
        }
    } else if (
        arr.length === 2 && Array.isArray(arr[0]) && arr[0].length === 2 &&
        Array.isArray(arr[1]) && arr[1].length !== 2
    ) {
        return [arr[0][0], arr[0][1]];
    } else if (
        arr.length === 2 && Array.isArray(arr[0]) && arr[0].length !== 2 &&
        Array.isArray(arr[1]) && arr[1].length !== 2
    ) {
        return [];
    } else {
        // Sort the array based on start points of each interval
        arr = arr.sort((a, b) => a[0] - b[0]);
        // Pick first two elements and replace them by their interval
        // Repeat until only the interval is left
        while (arr.length > 1) {
            const deletedItems = arr.splice(0, 2);
            arr.unshift(getSmallestInterval([deletedItems[0], deletedItems[1]]));
        }
        // Return the interval
        return arr[0];
    }
};

console.log(getSmallestInterval([[0, 3], [2, 6], [3, 4], [6, 9]]));