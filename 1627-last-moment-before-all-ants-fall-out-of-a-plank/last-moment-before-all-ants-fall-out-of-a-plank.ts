function getLastMoment(n: number, left: number[], right: number[]): number {
    const leftMax = Math.max(...left);
    const rightMax = Math.max(...(right.map(e => n - e)));
    return Math.max(leftMax, rightMax);
};