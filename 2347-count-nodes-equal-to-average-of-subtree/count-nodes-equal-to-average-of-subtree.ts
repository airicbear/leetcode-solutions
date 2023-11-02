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

function averageOfSubtree(root: TreeNode | null): number {
    let result = 0;

    const helper = (node: TreeNode | null) => {
        if (node == null) {
            return [0, 0];
        }

        const [leftSum, leftCount] = helper(node.left);
        const [rightSum, rightCount] = helper(node.right);

        const sum = leftSum + rightSum + node.val;
        const count = 1 + leftCount + rightCount;
        const avg = sum / count;

        if (Math.floor(avg) == node.val) {
            result++;
        }

        return [sum, count];
    }

    helper(root);

    return result;
};