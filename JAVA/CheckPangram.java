import java.util.Scanner;

public class CheckPangram {

    public static boolean checkPangram(String a) {
        int n = a.length();
        boolean[] hash = new boolean[26];
        int count = 0;

        for (int i = 0; i < n; i++) {
            char c = a.charAt(i);

            if (Character.isLetter(c)) {
                c = Character.toLowerCase(c);

                if (!hash[c - 'a']) {
                    count++;
                }
                hash[c - 'a'] = true;
            }
        }

        return count == 26;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        try {
            System.out.print("Enter a sentence: ");
            String a = sc.nextLine();
            System.out.println(checkPangram(a) ? "It's a pangram" : "It's not a pangram");
        } catch (Exception e) {
            System.out.println("Error occurred while processing the input.");
        } finally {
            sc.close();
        }
    }
}
