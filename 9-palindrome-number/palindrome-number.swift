class Solution {
    func isPalindrome(_ x: Int) -> Bool {
        if x < 0 {
            return false
        }

        var arr: [Int] = []
        var x = x

        while x > 0 {
            arr.append(x % 10)
            x /= 10
        }
        
        var p1 = 0
        var p2 = arr.count - 1

        while p1 < p2 {
            if arr[p1] != arr[p2] {
                return false
            }

            p1 += 1
            p2 -= 1
        }

        return true
    }
}