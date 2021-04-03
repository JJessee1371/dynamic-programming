// Brute force recursion
function canConstruct(target, wordBank) {
    if(target === '') return true;

    for(let word of wordBank) {
        if(target.indexOf(word) === 0) {
            const suffix = target.slice(word.length);
            if(canConstruct(suffix, wordBank) === true) {
                return true;
            }
        }
    };
    return false;
};

// Memoized algorithm
function canConstruct(target, wordBank, memo = {}) {
    if(target in memo) return memo.target;
    if(target === '') return true;

    for(let word of wordBank) {
        if(target.indexOf(word) === 0) {
            const suffix = target.slice(word.length);
            if(canConstruct(suffix, wordBank, memo) === true) {
                memo.target = true;
                return true;
            }
        }
    };
    memo.target = false;
    return false;
};