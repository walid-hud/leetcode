function twoSum(nums: number[], target: number): number[] {
  const result: number[] = [];
  const map = new Map();
  nums.forEach((n, idx) => map.set(n, idx));
  for (let i = 0; i < nums.length; i++) {
    let first = i;
    if (map.has(target - nums[i]!)) {
      let second = map.get(target - nums[i]!);
      result.push(first, second);
      break;
    }
  }
  return result;
}

