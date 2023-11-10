function restoreArray(adjacentPairs: number[][]): number[] {
    const arr = {};
    const out = [];
    for (let i = 0; i < adjacentPairs.length; i++) {
        const a = adjacentPairs[i][0];
        const b = adjacentPairs[i][1];
        if (arr[a] == null) {
            arr[a] = [];
        }
        if (arr[b] == null) {
            arr[b] = [];
        }
        arr[a].push(b);
        arr[b].push(a);
    }
    const stack = [];
    stack.push(Object.keys(arr)[0]);
    while (stack.length != 0) {
        const key = Number(stack.pop());
        if (out.length == 0) {
            out.push(key);
        } else {
            const head = out[0];
            const tail = out[out.length - 1];
            if (arr[head].indexOf(key) >= 0) {
                out.unshift(key);
            } else if (arr[tail].indexOf(key) >= 0) {
                out.push(key);
            }
        }
        for (let i = 0; i < arr[key].length; i++) {
            if (out.indexOf(arr[key][i]) < 0) {
                stack.push(arr[key][i]);
            }
        }
    }
    return out;
};