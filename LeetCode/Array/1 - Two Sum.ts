function twoSum(nums: number[], target: number) {
    const numMap = new Map<number, number>();
    
    for (let i = 0; i < nums.length ; i++) {
        if (numMap.has(target - nums[i]))
            return [numMap.get(target - nums[i]), i];
        
        numMap.set(nums[i], i);
    }
};