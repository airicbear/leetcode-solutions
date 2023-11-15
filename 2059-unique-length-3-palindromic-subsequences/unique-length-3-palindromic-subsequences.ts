function countPalindromicSubsequence(s: string): number {
    const map = {};
    const max = 676; // max 3-palindromic subsequences = 26^2
    let sum = 0;
    for (let i = 0; i < s.length - 1; i++) {
        if (map[s[i]] == null) {
            map[s[i]] = new Set([]);
        }
        if (map[s[i]].has(s[i+1])) continue;
        const tmp = new Set([]);
        for (let j = i + 1; j < s.length; j++) {
            if (tmp.has(s[j])) continue;
            tmp.add(s[j]);
            if (!map[s[i]].has(s[j])) {
                for (let k = j + 1; k < s.length; k++) {
                    if (s[i] == s[k] && !map[s[i]].has(s[j])) {
                        map[s[i]].add(s[j]);
                        sum++;
                    }
                    if (sum >= max) {
                        return max;
                    }
                }
            }
        }
    }
    return sum;
};