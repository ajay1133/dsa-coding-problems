const INF = Math.pow(2, 32) - 1;
const modifier = (m) => {
    for (let i = 0; i < m.length; i++) {
        for (let j = 0; j < m[i].length; j++) {
            if (parseInt(m[i][j]) === 0) {
                dfs(m, i, j, 0);
            }
        }
    }
    return m;
};
const dfs = (m, i, j, c) => {
    if (i < 0 || i >= m.length || j < 0 || j >= m[i].length || m[i][j] < c) {
        return;
    }
    m[i][j] = c;
    dfs(m, i, j - 1, c + 1); // L
    dfs(m, i, j + 1, c + 1); // T
    dfs(m, i + 1, j, c + 1); // R
    dfs(m, i - 1, j, c + 1); // B
};

const testCases = [
    [[2147483647, -1, 0, 2147483647], [2147483647, 2147483647, 2147483647, -1], [2147483647, -1, 2147483647, -1], [0, -1, 2147483647, 2147483647]]
];

for (const t of testCases) {
    console.log(modifier([...t]));
}
