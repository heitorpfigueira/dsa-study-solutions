function isValidSudoku(board: string[][]): boolean {
    let cols = Array.from({ length: 9}, () => new Set<number>());
    let rows = Array.from({ length: 9}, () => new Set<number>());
    let squares = 
        Array.from({ length: 3 }, 
        () => Array.from({ length: 3 },
             () => new Set<number>()));

    for (let row = 0; row <= 8; row++) {
        for (let col = 0; col <= 8; col++) {
            if (board[row][col] == '.')
                continue;
                
            const sqCol = Math.floor(col/3);
            const sqRow = Math.floor(row/3);


            if (rows[row]?.has(Number.parseInt(board[row][col])) ||
                cols[col]?.has(Number.parseInt(board[row][col])) ||
                squares[sqRow][sqCol]?.has(Number.parseInt(board[row][col]))) 
                    return false;

            cols[col].add(Number.parseInt(board[row][col]));
            rows[row].add(Number.parseInt(board[row][col]));
            squares[sqRow][sqCol].add(Number.parseInt(board[row][col]));
            
        }
    }
    return true;
};