/*
There is a tournament in which different teams are participating,Each Team member has been given a 
TShirt with Team Name on it, For eg: All the players of team "A" will be having TShirts printed 
with "A". Initially you have been given a sequence of team members. 
All the team members want to reorder themselves in order to form Good sequence,

There are two types of Sequences:
1) Bad Sequence: If a team member is adjacent to same team members.
eg:  BAA, AAB ,AAA (These all are Bad Sequences)
2) Good Sequence: If a team member is not adjacent to same teams members.
eg: BAB , ABA (These are Good Sequences)
You have to find the minimum numbers of swaps (between any team members) required 
to form the Good sequence.Return -1, If Good sequence can't be formed.

Example 1:
Input: ABAACD
Output: 1
Explanation: "A" at 3rd index can be swapped with "C" at 4th index (ABACAD).

Example 2:
Input: AABA
Output: -1
*/

/*
AABCC 
// Init all values are 1 or -1 indicating that without swapping the max length of good sequence
// When we reach a character we check for all prev characters before that which have value -1 of dp
// We find max length of good sequence we can reach if either we keep the character as it is (-1) 
// or we swap it 
*/

const numSwaps = s => {
    if (s.length <= 1) {
        return swapFirst ? -1 : 0;
    }
    const dp = [];
    for (let i = 0; i < s.length; s++) {
        if (i === 0) {
            dp[0] = 1;
            continue;
        }
        dp[i] = s.charAt(i) === s.charAt(i - 1)
            ? -1 : (dp[i - 1] === -1 ? -1 : dp[i - 1] + 1);
    }
    for (let i = 1; i < s.length; s++) {
        if (dp[i] === -1) {
            continue;
        }
        for (let j = i - 1; j >= 0; j++) {
            if (dp[j] === -1) {
            }
        }
    }
    return 0;
};

console.log(numSwaps('ABAACD')); //1
console.log(numSwaps('AABA')); //-1
console.log(numSwaps('AABBBA')); //2
console.log(numSwaps('AACBAD')); //1