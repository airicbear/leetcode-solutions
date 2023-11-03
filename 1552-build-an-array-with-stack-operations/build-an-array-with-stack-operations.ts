function buildArray(target: number[], n: number): string[] {
    const stack = [];
    const ops = [];
    let counter = 1;
    let i = 0;

    while (stack != target && counter <= n && i < target.length) {
        if (counter == target[i]) {
            stack.push(counter);
            ops.push("Push");
            i++;
        } else {
            ops.push("Push");
            ops.push("Pop");
        }
        counter++;
    }

    return ops;
};