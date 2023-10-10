function longestConsecutive(nums: number[]): number {
    const numSet = new Set(nums);
    let biggest = 0;

    for (const num of numSet) {
        if (!numSet.has(num-1)) {
            let lastNum = num;
            let count = 1;
            while (numSet.has(lastNum+1)) {
                count++;
                lastNum++;
            }

            if (count > biggest)
                biggest = count;
        }
    }
    return biggest;
};