function matchingStrings(stringList: string[], queries: string[]): number[] {
    const ansArr = new Array(queries.length);

    for (let i = 0; i < queries.length; i++) {
        ansArr[i] = stringList.filter(sl => sl === queries[i]).length;
    }

    return ansArr;
}
