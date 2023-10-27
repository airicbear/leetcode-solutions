/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */
class TreeNode1 {
    val: number
    left: TreeNode1 | null
    right: TreeNode1 | null
    constructor(val?: number, left?: TreeNode1 | null, right?: TreeNode1 | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

function sortedArrayToBST(nums: number[]): TreeNode1 | null {
    if (nums.length == 0) {
        return null;
    }

    if (nums.length == 1) {
        return new TreeNode1(nums[0]);
    }

    const mid = Math.floor(nums.length / 2);
    const val = nums[mid];
    const root = new TreeNode1(val);
    
    const left = nums.slice(0, mid);
    const right = nums.slice(mid + 1, nums.length);

    root.left = sortedArrayToBST(left);
    root.right = sortedArrayToBST(right);
    
    return root;
};