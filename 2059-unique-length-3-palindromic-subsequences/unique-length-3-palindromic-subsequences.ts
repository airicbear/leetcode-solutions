function countPalindromicSubsequence(s: string): number {
    const letters = Array.from(new Set(s.split('')));
    let sum = 0;

    for (const letter of letters) {
        const i = s.indexOf(letter);
        const j = s.lastIndexOf(letter);
        const between = new Set([]);

        for (let k = i + 1; k < j; k++) {
            between.add(s[k]);
        }

        sum += between.size;
    }

    return sum;
};