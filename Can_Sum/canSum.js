// Brute force algorithm
function canSum(targetSum, numbers) {
    if(targetSum === 0) return true;
    if(targetSum < 0) return false;

    for(let num of numbers) {
        const remainder = targetSum - num;
        if(canSum(remainder, numbers) === true) {
            return true;
        }
    };
    return false;
};

// Memoized algorithm
function canSumMemo(targetSum, numbers, memo = {}) {
    if(targetSum in memo) return memo.targetSum;
    if(targetSum === 0) return true;
    if(targetSum < 0) return false;

    for(let num of numbers) {
        const remainder = targetSum - num;
        if(canSumMemo(remainder, numbers, memo) === true) {
            memo.targetSum = true;
            return true;
        }
    };
    memo.targetSum = false;
    return false;
};