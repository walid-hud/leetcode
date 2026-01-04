
function isPalindrome(s: string): boolean {
    s = s.replace(/[^a-z0-9]/gi, '')
    if(s === "") return true
    let left = 0;
    let right = s.length -1
    while(left < right){
        if(s[left]?.toLowerCase() === s[right]?.toLowerCase()){
            left++
            right--
            continue
        }else{
            return false
        }
    }
    return true
};

console.assert(isPalindrome("A man, a plan, a canal: Panama")===true)
console.assert(isPalindrome("race a car")===false)
console.assert(isPalindrome("aa")===true)
