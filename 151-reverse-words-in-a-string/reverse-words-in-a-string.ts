function reverseWords(s: string): string {
    const arr = [];
    let word = "";
    let i = s.length - 1;
    while (i >= 0) {
        if (s[i] != ' ') {
            let j = i;
            let length = 0;
            while (j >= 0 && s[j] != ' ') {
                j--;
                i--;
                length++;
            }
            j = 0;
            while (j < length) {
                word += s[j + i + 1];
                j++;
            }
            arr.push(word);
        } else {
            i--;
            word = "";
        }
    }
    return arr.join(' ');
};