function containsDuplicate(nums: number[]): boolean {
    let set: Set<number> = new Set();

    for (const number of nums) {
        if (set.has(number))
            return true;

        set.add(number);
    }
    
    return false;
};