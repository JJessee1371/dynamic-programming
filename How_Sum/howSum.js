// Brute force algorithm
function howSum(targetSum, numbers) {
    if(targetSum === 0) return [];
    if(targetSum < 0) return null;

    for(let num of numbers) {
        const reaminder = targetSum - num;
        const remainderResult = howSum(remainder, numbers);
        if(remainderResult != null) {
            return [...remainderResult, num];
        }
    };
    return null;
};

// Memoized version of algorithm
function howSumMemo(targetSum, numbers, memo = {}) {
    if(targetSum in memo) return memo.targetSum;
    if(targetSum === 0) return [];
    if(targetSum < 0) return null;

    for(let num of numbers) {
        const reaminder = targetSum - num;
        const remainderResult = howSumMemo(remainder, numbers, memo);
        if(remainderResult != null) {
            memo.targetSum = [...remainderResult, num];
            return [...remainderResult, num];
        }
    };
    memo.targetSum = null;
    return null;
};