function strStr(haystack: string, needle: string): number {
    for(let i = 0; i<haystack.length;i++){
        if(haystack[i]===needle[0]){
            for(let j = 0; j<needle.length;j++){
                if(needle[j]!==haystack[j]){
                    return -1
                }
            }
            return i
            
        }
    }
    return -1

};

console.assert(strStr("sadbutsad" , "sad")===0)
console.assert(strStr("leetcode" , "leeto")===-1)
