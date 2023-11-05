function getWinner(arr: number[], k: number): number {
    const map = {};
    let i = 0;
    while (true) {
        const a0 = arr.shift();
        const a1 = arr.shift();
        const tmp = [a0, a1];
        tmp.sort((a, b) => a - b);
        const min = tmp.shift();
        const max = tmp.shift();
        arr.push(min);
        arr.unshift(max);
        map[max] = (map[max] ?? 0) + 1;
        if (map[max] >= k) {
            return max;
        }
        if (i > arr.length) {
            return max;
        }
        i++;
    }
};