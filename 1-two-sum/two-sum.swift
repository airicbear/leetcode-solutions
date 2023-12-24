class Solution {
    func twoSum(_ nums: [Int], _ target: Int) -> [Int] {
        var sum: Int = 0

        for (i, num1) in nums.enumerated() {
            for (j, num2) in nums.enumerated() {
                if i != j && num1 + num2 == target {
                    return [i, j]
                }
            }
        }

        return [-1,-1]
    }
}