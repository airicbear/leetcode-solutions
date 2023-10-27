function mergeAlternately(word1: string, word2: string): string {
    let p1 = 0;
    let p2 = 0;
    const output = [];

    while (p1 < word1.length || p2 < word2.length) {
        if (p1 < word1.length) {
            output.push(word1[p1]);
        }
        if (p2 < word2.length) {
            output.push(word2[p2]);
        }
        p1++;
        p2++;
    }

    return output.join("");
};