// aa => 1, abca => 3, abb => 2
const largestSubWithNoDup = str => {
    if (str.length < 1) {
        return str.length;
    }
    const dp = [];
    for (let i = 0; i < str.length; i++) {
        dp[i] = 1;
    }
    for (let i = 1; i < str.length; i++) {
        for (let j = i - 1; j >= 0; j--) {
            //console.log(i, j, str.charAt(i), str.charAt(j));
            if (str.charAt(i) !== str.charAt(j)) {
                dp[i]++;
            }
        }
    }
    return dp[str.length - 1];
};

console.log(largestSubWithNoDup('aa'));
console.log(largestSubWithNoDup('abca'));
console.log(largestSubWithNoDup('abb'));