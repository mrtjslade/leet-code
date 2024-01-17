// 1768. Merge Strings Alternately

// You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

// Return the merged string.

/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let mergedWord = "";
    let word1Index = 0;
    let word2Index = 0;

    while(word1Index < word1.length || word2Index < word2.length){
        if (word1Index < word1.length) {
            mergedWord += word1[word1Index++];
        }
        if (word2Index < word2.length) {
            mergedWord += word2[word2Index++];
        }
    } 
    return mergedWord;
};