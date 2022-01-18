// Given fixed priority { -> [ -> (, check if a string is valid

const isValid = str => {
    if (str.length <= 1) {
        return false;
    }
    const pr = new Map().set('{', 3).set('[', 2).set('(', 1);
    let c = 0;
    let st = [];
    while (c < str.length) {
        let ch = str.charAt(c);
        if (['{', '[', '('].indexOf(ch) > -1) {
            if (st.length) {
                const top = st[st.length - 1];
                if (pr.get(top) < pr.get(ch)) {
                    return false;
                }
            }
            st.push(ch);
        } else if (!st.length) {
            return false;
        } else {
            const top = st[st.length - 1];
            if (
                (top === '{' && ch === '}') ||
                (top === '[' && ch === ']') ||
                (top === '(' && ch === ')')
            ) {
                st.pop();
            } else {
                return false;
            }
        }
        c++;
    }
    return !st.length;
};

console.log(isValid('{]')); // false
console.log(isValid('{}')); // true
console.log(isValid('{}[]')); // true
console.log(isValid('{[]}')); // true
console.log(isValid('{([])}')); // false