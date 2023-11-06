function canPlaceFlowers(flowerbed: number[], n: number): boolean {
    if (n == 0) {
        return true;
    }
    let count = 0;
    flowerbed.push(0);
    flowerbed.unshift(0);
    for (let i = 1; i < flowerbed.length - 1; i++) {
        if (flowerbed[i] == 0 && flowerbed[i - 1] == 0 && flowerbed[i + 1] == 0) {
            count++;
            flowerbed[i] = 1;
        }
        if (count == n) {
            return true;
        }
    }
    return false;
};