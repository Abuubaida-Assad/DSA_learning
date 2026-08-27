/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let prifix = strs[0];
    for(let i=1; i<strs.length; i++){
        while(strs[i].indexOf(prifix) !==0){
            prifix = prifix.substring(0,prifix.length-1)
        }
    }
    return prifix;
};

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }

    let map = new Map();

    // Count characters in s
    for (let x of s) {
        map.set(x, (map.get(x) || 0) + 1);
    }

    // Remove characters using t
    for (let x of t) {
        if (!map.has(x)) {
            return false;
        }

        map.set(x, map.get(x) - 1);

        if (map.get(x) < 0) {
            return false;
        }
    }

    return true;
};


