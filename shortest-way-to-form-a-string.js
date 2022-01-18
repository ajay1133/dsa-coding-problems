/*
Given two strings source and target, return the minimum number of subsequences of source such that 
their concatenation equals target. If the task is impossible, return -1.

Input: source = "abc", target = "abcbc"
Output: 2
Explanation: The target "abcbc" can be formed by "abc" and "bc",
which are subsequences of source "abc"

Input: source = "xyz", target = "xzyxz"
Output: 3
Explanation: The target string can be constructed as follows "xz" + "y" + "xz"
*/

const shortestWay = (str, target, start, ans, cache) => {
    if (!str.length || !target.length) {
        return 0;
    }
    if (start >= target.length) {
        return ans;
    }
    if (cache.has(start)) {
        return cache.get(start);
    }
    console.log(start, ans, cache);
    let i = 0, matchedLength = 0, breakFlag = false;
    while (i < str.length && start < target.length && !breakFlag) {
        const
            ch1 = str.charAt(i),
            ch2 = target.charAt(start);
        if (ch1 !== ch2) {
            if (matchedLength) {
                breakFlag = true;
            } else {
                i++;
            }
        } else {
            matchedLength++;
            i++;
            start++;
        }
    }
    console.log(i, start, matchedLength, breakFlag);
    if (!matchedLength) {
        ans = -1;
        cache.set(start, ans);
        return ans;
    }
    // cache.set(start, ans);
    return shortestWay(str, target, breakFlag || i >= str.length ? start : start + 1, ans + 1, cache);
}

//console.log(shortestWay('abc', 'abcbc', 0, 0, new Map()));
console.log(shortestWay('xyz', 'xzyxz', 0, 0, new Map()));
//console.log(shortestWay('abc', 'abcdbc', 0, 0, new Map()));