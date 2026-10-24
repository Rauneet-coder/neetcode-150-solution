class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        for i in range(len(s) and len(t)):
            if s[i] == t[i]:
                return True
        return False        