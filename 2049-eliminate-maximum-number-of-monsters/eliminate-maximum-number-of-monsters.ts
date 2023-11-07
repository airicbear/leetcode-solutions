function eliminateMaximum(dist: number[], speed: number[]): number {
    const arr = [];
    for (let i = 0; i < dist.length; i++) {
        arr.push(Math.ceil(dist[i] / speed[i]));
    }
    arr.sort((a, b) => a - b);

    if (arr[0] == 0) {
        return 1;
    }

    let count = 0;
    while (arr.length > 0) {
        if (arr[0] == 0) {
            break;
        }
        count++;
        arr.shift();
        for (let i = 0; i < arr.length; i++) {
            --arr[i];
        }
    }
    
    return count;
};