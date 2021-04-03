// Brute force algorithm
function gridTraveler(m, n) {
    if(m == 0 || n == 0) return 0;
    if(m == 1 && n == 1) return 1;

    return gridTraveler(m - 1, n) + gridTraveler(m, n - 1);
};

// Memoized algorithm
function gridMemo(m, n, memo = {}) {
    const key = m + ',' + n;
    if(key in memo) return memo.key;
    if(m == 0 || n == 0) return 0;
    if(m == 1 && n == 1) return 1;

    memo.key = gridMemo(m - 1, n, memo) + gridMemo(m, n - 1, memo);
    return memo.key;
};