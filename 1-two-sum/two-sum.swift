class Solution {
    func twoSum(_ nums: [Int], _ target: Int) -> [Int] {
        var dict: [Int: Int] = [:]

        for (i, num) in nums.enumerated() {
            if let j = dict[target - num] {
                return [j, i]
            } else {
                dict[num] = i
            }
        }

        return [-1,-1]
    }
}