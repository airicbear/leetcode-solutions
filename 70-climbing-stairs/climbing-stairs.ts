function climbStairs(n: number): number {
    let ways = [1, 1];

    for (let i = 2; i <= n; i++) {
        ways.push(ways[i - 1] + ways[i - 2]);
    }

    return ways[n];
};