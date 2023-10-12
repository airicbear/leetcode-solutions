class Solution {
    public List<List<Integer>> generate(int numRows) {
        List<List<Integer>> result = new ArrayList<>();

        for (int n = 1; n <= numRows; n++) {
            List<Integer> row = new ArrayList<>();

            for (int k = 0; k < n; k++) {
                if (k == 0 || k == n - 1) {
                    row.add(1);
                } else {
                    row.add(0);
                }
            }

            result.add(row);
        }

        for (int n = 2; n < numRows; n++) {
            List<Integer> prevRow = result.get(n - 1);
            List<Integer> row = result.get(n);

            for (int k = 0; k < n - 1; k++) {
                row.set(k + 1, prevRow.get(k) + prevRow.get(k + 1));
            }
        }

        return result;
    }
}