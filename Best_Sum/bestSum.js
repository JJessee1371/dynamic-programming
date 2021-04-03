// Brute force algorithm
function bestSum(targetSum, numbers) {
    if(targetSum == 0) return [];
    if(targetSum < 0) return null;

    let shortestArr = null;

    for(let num of numbers) {
        let remainder = targetSum - num;
        let remainderResult = bestSum(remainder, numbers);
        if(remainderResult != null) {
            let arr = [...remainderResult, num];
            if(shortestArr === null || arr.length < shortestArr.length) {
                shortestArr = arr;
            }
        }
    };
    return shortestArr;
};

//Memoized algorithm
function bestSum(targetSum, numbers, memo = {}) {
    if(targetSum in memo) return memo.targetSum;
    if(targetSum == 0) return [];
    if(targetSum < 0) return null;

    let shortestArr = null;

    for(let num of numbers) {
        let remainder = targetSum - num;
        let remainderResult = bestSum(remainder, numbers, memo);
        if(remainderResult != null) {
            let arr = [...remainderResult, num];
            if(shortestArr === null || arr.length < shortestArr.length) {
                shortestArr = arr;
            }
        }
    };
    memo.targetSum = shortestArr;
    return shortestArr;
};