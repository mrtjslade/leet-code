/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let shortestWordLen = strs[0].length;
    for(const short of strs){
        shortestWordLen = Math.min(short.length, shortestWordLen);
    }
    
    let prefix = "";
    for(let i = 0; i < shortestWordLen; i++){
        const currentChar = strs[0][i];
        for(const str of strs){
            if(str[i] !== currentChar){
                return prefix;
            }
        }
        prefix += currentChar;
    }
    return prefix;
};