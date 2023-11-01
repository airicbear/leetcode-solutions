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

function findMode(root: TreeNode | null): number[] {
    const dict = {};
    const stack = [];
    stack.push(root);
    while (stack.length != 0) {
        const next = stack.pop();

        dict[next.val] = (dict[next.val] ?? 0) + 1;

        if (next.left != null) {
            stack.push(next.left);
        }

        if (next.right != null) {
            stack.push(next.right);
        }
    }

    console.log(dict);

    let max = 0;
    for (const [key, value] of Object.entries(dict)) {
        if (Number(value) > max) {
            max = Number(value);
        }
    };

    const output = [];
    for (const [key, value] of Object.entries(dict)) {
        if (Number(value) == max) {
            output.push(Number(key));
        }
    };

    return output;
};