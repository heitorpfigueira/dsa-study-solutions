function groupAnagrams(stringArray: string[]): string[][] {
    const anagrams: Map<string, string[]> = new Map();
  
    for (const str of stringArray) {
      const sortedStr = str.split('').sort().join('');
  
      if (!anagrams.has(sortedStr)) {
        anagrams.set(sortedStr, [str]);
      } else {
        anagrams.get(sortedStr)!.push(str);
      }
    }
  
    return Array.from(anagrams.values());
  }