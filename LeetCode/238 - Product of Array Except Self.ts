function productExceptSelf(nums: number[]): number[] {
    let res = new Array(nums.length).fill(1);

    let temp = 1;
    for (let i = 0; i <= nums.length; i++) {
        res[i] *= temp;
        temp *= nums[i];
    }
    temp = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        res[i] *= temp;
        temp *= nums[i];
    }
    return res;
};