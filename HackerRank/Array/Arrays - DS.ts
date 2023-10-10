function reverseArray(a: number[]): number[] {
    let newArray = [];
    
    for(let i = a.length - 1; i >= 0; i--) {
        newArray.push(a[i]);
    }
    
    return newArray;
}