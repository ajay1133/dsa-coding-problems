const isAnagram = (x, y) => {
    if (x.length !== y.length) {
        return false;
    }
    if (x.length === 0) {
        return true;
    } else if (x.length === 1) {
        return x === y;
    }
    const set = new Set();
    for (const ch of x.split('')) {
        set.add(ch.toLowerCase());
    }
    let isMatch = true;
    for (const ch of y.split('')) {
        if (!set.has(ch.toLowerCase())) {
            isMatch = false;
            break;
        }
    }
    return isMatch;
}    

console.log(isAnagram('Listen', 'Silent'));