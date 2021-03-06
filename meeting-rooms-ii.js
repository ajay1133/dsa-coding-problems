const maxMeetingRooms = (A) => {
    if (!A || !A.length) {
        return 0;
    }
    const timeLine = [];
    for (let i = 0; i < A.length; i++) {
        timeLine.push({ value: A[i][0], isStart: true });
        timeLine.push({ value: A[i][1], isStart: false });
    }
    timeLine.sort((a, b) => a.value - b.value);
    let total = 0, res = 0;
    for (let i = 0; i < timeLine.length; i++) {
        total += timeLine[i].isStart ? 1 : -1;
        res = Math.max(res, total);
    }
    return res;
};

const testCases = [
    [[1, 18], [18, 23], [15, 29], [4, 15], [2, 11], [5, 13]], //4
    [[0, 14], [6, 25], [12, 19], [13, 19], [5, 9]] //4
];
for (const testCase of testCases) {
    console.log(maxMeetingRooms(testCase));
}