function buildArray(nums: number[]): number[] {
    let ans = new Array(nums.length);
    nums.forEach((num, i) => ans[i] = nums[num]);
    return ans;
};