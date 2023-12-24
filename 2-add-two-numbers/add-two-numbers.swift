/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     public var val: Int
 *     public var next: ListNode?
 *     public init() { self.val = 0; self.next = nil; }
 *     public init(_ val: Int) { self.val = val; self.next = nil; }
 *     public init(_ val: Int, _ next: ListNode?) { self.val = val; self.next = next; }
 * }
 */
class Solution {
    func addTwoNumbers(_ l1: ListNode?, _ l2: ListNode?) -> ListNode? {
        var result = ListNode()
        var curr = result
        var l1 = l1
        var l2 = l2
        var carry = false

        while true {
            if l1 == nil && l2 == nil {
                break
            }

            var currSum = 0

            if let l1 = l1 {
                currSum += l1.val
            }

            if let l2 = l2 {
                currSum += l2.val
            }

            if carry {
                currSum += 1
            }

            if currSum >= 10 {
                carry = true
            } else {
                carry = false
            }

            curr.next = ListNode(currSum % 10)
            
            if let next = curr.next {
                curr = next
            }
            
            if let unwrappedL1 = l1 {
                if let nextL1 = unwrappedL1.next {
                    l1 = nextL1
                } else {
                    l1 = nil
                }
            }
            
            if let unwrappedL2 = l2 {
                if let nextL2 = unwrappedL2.next {
                    l2 = nextL2
                } else {
                    l2 = nil
                }
            }
        }

        if carry {
            curr.next = ListNode(1)
        }

        return result.next
    }
}