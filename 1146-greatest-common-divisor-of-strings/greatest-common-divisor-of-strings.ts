function gcdOfStrings(str1: string, str2: string): string {
    while ((str1.indexOf(str2) >= 0 || str2.indexOf(str1) >= 0) && str1.length != str2.length) {
        while (str1.indexOf(str2) >= 0 && str1.length != str2.length) {
            const idx = str1.indexOf(str2);
            if (idx % str2.length != 0) {
                return "";
            }
            str1 = str1.substring(0, idx) + str1.substring(idx + str2.length, str1.length);
        }
        while (str2.indexOf(str1) >= 0 && str1.length != str2.length) {
            const idx = str2.indexOf(str1);
            if (idx % str1.length != 0) {
                return "";
            }
            str2 = str2.substring(0, idx) + str2.substring(idx + str1.length, str2.length);
        }
    }
    console.log(str1);
    console.log(str2);
    if (str1 == str2) {
        return str1;
    }
    if (str1 == "" || str1.indexOf(str2) >= 0) {
        return gcd(str2);
    }
    if (str2 == "" || str2.indexOf(str1) >= 0) {
        return gcd(str1);
    }
    return "";
};

function gcd(str: string): string {
    let arr = [str[0]];
    let i = 1;
    while (str.substring(i, i + arr.length) != arr.join('') && i < str.length) {
        arr.push(str[i]);
        i++;
    }
    return arr.join('');
}