function hourglassSum(arr: number[][]): number {
    const maxCol = arr[0].length - 2; 
    const maxRow = arr.length - 2;
    let ans = -Infinity;

    for (let row = 0; row < maxRow; row++) {
        for (let col = 0; col < maxCol; col++) {
            const sumXY = 
            arr[row][col] + arr[row][col + 1] + arr[row][col + 2] +
                arr[row + 1][col + 1] +
            arr[row + 2][col] + arr[row + 2][col + 1] + arr[row + 2][col + 2];
            
            ans = Math.max(sumXY, ans);
        }
    }
    
    return ans;
}