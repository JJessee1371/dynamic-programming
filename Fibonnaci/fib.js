// Brute force algorithm
function fib(x) {
    if(n <= 2) return 1;
    return fib(x - 1) + fib(x - 2);
};

// Memoized version of algorithm
function fibMemo(x, memo = {}) {
    if(x in memo) return memo.x;
    if(n <= 2) return 1;

    memo.x = fibMemo(x - 1, memo) + fibMemo(x - 2, memo);
    return memo.x;
};