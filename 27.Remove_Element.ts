// another poorly written and tested leetcode problem  
function removeElement(nums: number[], val: number): number {
    for(let i = 0; i<nums.length;i++){
        if(nums[i]===val){
            nums.splice(i,1)
        }
    }
    return nums.length
};

console.assert(removeElement([3,2,2,3],3)===2)