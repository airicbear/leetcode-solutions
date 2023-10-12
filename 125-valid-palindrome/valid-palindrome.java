class Solution {
    public boolean isPalindrome(String s) {
        int length = s.length();
        StringBuilder sb = new StringBuilder();

        if (length < 2) {
            return true;
        }

        for (int i = 0; i < length; i++) {
            char c = s.charAt(i);
            if (Character.isLetterOrDigit(c)) {
                sb.append(Character.toLowerCase(c));
            }
        }

        String str = sb.toString();
        length = str.length();

        for (int i = 0; i < length / 2; i++) {
            char c1 = str.charAt(i);
            char c2 = str.charAt(length - 1 - i);
            System.out.println(c1 + " == " + c2);
            if (c1 != c2) {
                return false;
            }
        }

        return true;
    }
}