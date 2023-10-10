function rotateLeft(d: number, arr: number[]): number[] {
    let newArr = new Array(arr.length);
    
    for (let i = 0; i < arr.length; i++) {
        const calc = i - d;
        const newIndex = calc < 0 ? arr.length+calc : calc;
        
        newArr[newIndex] = arr[i];
    }
    
    return newArr;   
}