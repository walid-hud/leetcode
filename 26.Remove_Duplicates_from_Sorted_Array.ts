// this is the correct solution but SOMEHOW the evaluation on leetcode says it's not💀
function removeDuplicates(nums: number[]): number {
    return Array.from(new Set(nums)).length
};

console.assert(removeDuplicates([1,1,1,2])==2)
