function countPalindromicSubsequence(s: string): number {
    const first = Array(26).fill(-1);
    const last = Array(26).fill(-1);

    for (let i = 0; i < s.length; i++) {
        const curr = s.charCodeAt(i) - 'a'.charCodeAt(0);
        if (first[curr] == -1) {
            first[curr] = i;
        }
        last[curr] = i;
    }

    let sum = 0;
    for (let i = 0; i < 26; i++) {
        if (first[i] == -1) {
            continue;
        }

        const between = new Set();
        for (let j = first[i] + 1; j < last[i]; j++) {
            between.add(s.charAt(j));
        }
        sum += between.size;
    }

    return sum;
};