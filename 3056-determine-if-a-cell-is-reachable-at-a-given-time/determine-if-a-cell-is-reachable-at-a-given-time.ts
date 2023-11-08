function isReachableAtTime(sx: number, sy: number, fx: number, fy: number, t: number): boolean {
    const x = Math.abs(fx - sx);
    const y = Math.abs(fy - sy);
    if (x + y == 0 && t == 1) {
        return false;
    }
    return t >= Math.max(x, y);
};