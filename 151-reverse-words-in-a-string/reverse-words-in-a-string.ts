function reverseWords(s: string): string {
    const arr = [];
    let word = "";
    for (let i = 0; i < s.length + 1; i++) {
        if (i < s.length && s[i] != ' ') {
            word += s[i];
        } else {
            if (word != '') {
                arr.unshift(word);
                console.log(arr);
            }
            word = "";
        }
    }
    return arr.join(' ');
};