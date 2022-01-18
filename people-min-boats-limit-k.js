const reqBoats = (people, maxWeight) => {
    let res = 0;
    people.sort((a, b) => a - b);
    let tempWeight = 0;
    for (const person of people) {
        tempWeight += person;
        if (tempWeight >= maxWeight) {
            tempWeight = person;
            if (tempWeight > maxWeight) {
                return -1;
            }
            res++;
        }
    }
    if (tempWeight > 0) {
        res++;
    }
    return res;
};

const testCases = [
    { people: [100, 200, 150, 80], k: 200 }
];

for (const testCase of testCases) {
    const { people, k: maxWeight } = testCase;
    console.log(reqBoats(people, maxWeight));
}