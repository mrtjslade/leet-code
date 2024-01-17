// 9. Palindrome Number
// Given an integer x, return true if x is a palindrome, and false otherwise.

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let str = x.toString();
    let reversed = str.split("").reverse().join("").toString();
    
    if(reversed == x){
        return true;
    }
    return false;
};