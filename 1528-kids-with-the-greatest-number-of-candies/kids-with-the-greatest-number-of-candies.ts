function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
    let max = 0;
    
    for (let i = 0; i < candies.length; i++) {
        if (candies[i] > max) {
            max = candies[i];
        }
    }

    let arr = [];

    for (let i = 0; i < candies.length; i++) {
        arr.push((candies[i] + extraCandies) >= max);
    }

    return arr;
};