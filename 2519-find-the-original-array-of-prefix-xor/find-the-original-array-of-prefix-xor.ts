function findArray(pref: number[]): number[] {
    const arr = [pref[0]];
    let val = arr[0];
    
    for (let i = 1; i < pref.length; i++) {
        arr.push(val ^ pref[i]);
        val = pref[i];
    }
    
    return arr;
};