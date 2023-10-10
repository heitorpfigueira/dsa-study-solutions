function topKFrequent(nums: number[], k: number): number[] {
    let count: Map<number, number> = new Map();
    let freqs: Array<number[]> = new Array(nums.length).fill(null).map(() => []);;

    for (const num of nums) {
        count.set(num, (count.get(num) ?? 0) + 1);        
    }

    for (const entry of count.entries()) {
        freqs[entry[1]] = freqs[entry[1]].concat(entry[0]);
    }

    let ans: number[] = [];

    for (let i = freqs.length - 1; i >= 0; i--) {
        for (const n of freqs[i]) {
            if (ans.length > k)
                return ans;

            ans.push(n);
        }
    }
};