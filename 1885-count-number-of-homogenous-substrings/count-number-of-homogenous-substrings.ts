function countHomogenous(s: string): number {
    let count = 0;
    let lastIndex = 0;
    let letter = s[0];
    let map = {};

    function helper(n: number) {
        if (n <= 1) {
            return 1;
        }
        if (n in map) {
            return map[n];
        }
        map[n] = helper(n - 1) + n;
        return map[n];
    }

    for (let i = 1; i < s.length; i++) {
        const distance = i - lastIndex;
        const increment = helper(distance);
        if (s[i] != letter) {
            count += increment;
            count %= Math.pow(10, 9) + 7;
            lastIndex = i;
            letter = s[i];
        }
    }

    count += helper(s.length - lastIndex);
    count %= Math.pow(10, 9) + 7;
    return count;
};

