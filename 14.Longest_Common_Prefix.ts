function longestCommonPrefix(strs: string[]): string {
    let perfix= ""
    const first = strs[0]!.split('')
    for(let idx = 0; idx<first.length;idx++){
        if(strs.every(str=>str.at(idx)===first[idx])){
            perfix+=first[idx]
        }else{
            break

        }
    }
    return perfix
};


console.log(longestCommonPrefix(["cir","car"]))