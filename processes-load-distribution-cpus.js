/*
There are some processes that need to be executed. Amount of a load that process causes on a server
that runs it, is being represented by a single integer. Total load caused on a server is the sum of
the loads of all the processes that run on that server. You have at your disposal two servers,
on which mentioned processes can be run. Your goal is to distribute given processes between those
two servers in the way that, absolute difference of their loads will be minimized.
Given an array of n integers, of which represents loads caused by successive processes,
return the minimum absolute difference of server loads.
Example 1:
Input: [1, 2, 3, 4, 5]
Output: 1
Explanation:
We can distribute the processes with loads [1, 2, 4] to the first server and [3, 5] to the
second one, so that their total loads will be 7 and 8, respectively, and the difference of
their loads will be equal to 1.
*/

const distributeProcesses = (processesList, cpus) => {
    if (!processesList.length) {
        // Compute minimum time taken by pushing this process by processing modified cpu state
        let maxTimeTakenByCPUsInParallel = 0;
        for (let k = 0; k < cpus.length; k++) {
            let tempCPUTime = 0;
            for (let l = 0; l < cpus[k].length; l++) {
                tempCPUTime += cpus[k][l];
            }
            if (maxTimeTakenByCPUsInParallel === 0 || tempCPUTime > maxTimeTakenByCPUsInParallel) {
                maxTimeTakenByCPUsInParallel = tempCPUTime;
            }
        }
        return maxTimeTakenByCPUsInParallel;
    }
    let totalTime = 0;
    for (let i = 0; i < processesList.length; i++) {
        for (let j = 0; j < cpus.length; j++) {
            // Push process to jth cpu
            cpus[j].push(processesList[i]);
            const newProcessesList = [];
            for (let k = 0; k < processesList.length; k++) {
                if (k === i) {
                    continue;
                }
                newProcessesList.push(processesList[k]);
            }
            // Calculate the present state
            const distributeProcess = distributeProcesses(newProcessesList, cpus);
            if (totalTime === 0 || distributeProcess <= totalTime) {
                totalTime = distributeProcess;
            }
            // Reset back cpus state
            cpus[j].pop();
        }
    }
    return totalTime;
};

// For n cpus
const recursiveSolution = (processesList, noOfCPUs) => {
    const cpus = [];
    for (let i = 0; i < noOfCPUs; i++) {
        cpus[i] = [];
    }
    // Recursion based
    return distributeProcesses(processesList, cpus);
};

// Weight: Half of total load (only for 2 cpus)
const knapsackSolution = (processesList) => {
    if (!processesList.length) {
        return 0;
    }
    let totalWeight = 0;
    const dp = [];
    for (let i = 0; i < processesList.length; i++) {
        totalWeight += processesList[i];
        dp[i] = [];
        dp[i][0] = 0;
    }
    const expWeight = parseInt(totalWeight / 2);
    for (let i = 0; i < processesList.length; i++) {
        for (let j = 0; j <= expWeight; j++) {
            if (i === 0) {
                dp[0][j] = j >= processesList[0] ? processesList[0] : 0;
            } else {
                dp[i][j] = j >= processesList[i]
                    ? Math.max(dp[i][j - processesList[i]] + processesList[i], dp[i - 1][j])
                    : dp[i - 1][j];
            }
        }
    }
    const maxAchievableWeight = dp[processesList.length - 1][expWeight];
    return Math.max(maxAchievableWeight, totalWeight - maxAchievableWeight);
};

const processesList = [1, 2, 3, 4, 5];
// Basic recursion solution 
console.log(recursiveSolution(processesList, 2));
// Basic knapsack solution
console.log(knapsackSolution(processesList, 2));
