/*
Given an sorted array nums of unique numbers and a lower and upper bound of integers
output the missing range not in nums
Example 1: [0, 13, 50, 95], (0, 99) => ['1-12', '14-49', '51->94', '96-99']
Example 2: [], (1, 1) => ['1']
Example 3: [], (1, 4) => ['1-4'] 
*/

const missingNums = (nums, l, h) => {
    if (!nums.length) {
        return l == h ? [`${l}`] : [`${l}->${h}`]; 
    }
    const res = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < l) {
            nums[i] = l;
            continue;
        } else if (nums[i] > h) {
            nums[i] = h;
        }
        const r = i > 0 ? nums[i] - nums[i - 1] : nums[i] - l;
        if (r > 0) {
            const 
                rl = i > 0 ? nums[i - 1] + 1 : l,
                rh = nums[i] - 1;
            if (rl === rh) {
                res.push(`${rl}`);
            } else {
                res.push(`${rl}->${rh}`);
            }
        }
    }
    if (nums[nums.length - 1] < h) {
        const r = h - nums[nums.length - 1];
        if (r > 0) {
            const 
                rl = nums[nums.length - 1] + 1,
                rh = h;
            if (rl === rh) {
                res.push(`${rl}`);
            } else {
                res.push(`${rl}->${rh}`);
            }
        }
    }
    return res;
}

console.log(missingNums([0, 13, 50, 105], 0, 99));
console.log(missingNums([0, 13, 50, 95], 0, 99));
console.log(missingNums([0, 13, 50, 95], -10, 100));
console.log(missingNums([0, 13, 50, 95], -10, 95));
console.log(missingNums([0, 13, 50, 95], 0, 95));
console.log(missingNums([0, 13, 50, 95], 0, 94));
console.log(missingNums([0, 13, 50, 95], 1, 94));
console.log(missingNums([], 1, 1));
console.log(missingNums([], 1, 4));