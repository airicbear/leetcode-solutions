function reverseVowels(s: string): string {
    let res = "";
    let j = s.length - 1;
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    for (let i = 0; i < s.length; i++) {
        if (vowels.includes(s[i])) {
            while (j >= 0 && !vowels.includes(s[j])) {
                j--;
            }
            if (vowels.includes(s[j])) {
                res += s[j];
                j--;
            }
        } else {
            res += s[i];
        }
    }
    return res;
};