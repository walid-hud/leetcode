function isPalindrome(x: number): boolean {
    if(x<0) return false
    let is_palindrome = false 
    const str = String(x)
    if(str.length<2) return false
    if(str.length % 2 ===0 || str.length===2){
        const left = str.slice(0 , str.length/2)
        const right = str.slice(str.length/2)
        is_palindrome = left===right.split("").reverse().join("")
    }else{
        const left = str.slice(0 , (str.length-1)/2)
        const right = str.slice((str.length+1)/2)
        const center = str.slice(str.length/2,(str.length+1)/2)
        is_palindrome = left===right.split("").reverse().join("")
    }

    return is_palindrome

};


console.assert(isPalindrome(101)===false)
console.assert(isPalindrome(1024)===true)