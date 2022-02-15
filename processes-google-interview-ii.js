// Give a list of N processes with each object containing start, end
// and a list of K queries with time
// for each query output list of processes at that time
const listProcesses = (N, K) => {
    // Make a timeLine with each key
    const timeLine = new Map(), queries = new Set(K);
    for (let i = 0; i < N.length; i++) {
        const p = N[i];
        timeLine.set(p[0], {
            isStart: 1
        });
        timeLine.set(p[1], {
            isStart: 0
        });
    }
    let count = 0;
    const timeLineListInOrder = [...timeLine.keys()].sort((a, b) => a - b);
    for (const time of timeLineListInOrder) {
        const v = timeLine.get(time);
        count += v.isStart ? 1 : -1;
        v.count = count;
    }
    // Binary search if v1 >= v <= v2: output v2 - v1
    const res = [];
    for (const q of queries.values()) {
        const range = partOfRange(timeLineListInOrder, q);
        const { count: v1 = 0 } = timeLine.get(range) || {};
        res.push(v1);
    }
    return res;
};

const partOfRange = (arr, q) => {
    let n = arr.length, l = 0; h = n - 1, m = -1;
    while (l < h) {
        m = parseInt((l + h) / 2);
        if (q === arr[m]) {
            return arr[m];
        } else if (q < arr[m]) {
            h = m - 1;
        } else {
            l = m + 1;
        }
    }
    return q < arr[h] ? (h > 0 ? arr[h - 1] : null) : arr[h];
};

const testCases = [
    [
        [[1, 6], [2, 8], [16, 18], [93, 95]],
        [4, 59, 67, 1, 0]
    ]
];

testCases.forEach(t => console.log(listProcesses(t[0], t[1])));