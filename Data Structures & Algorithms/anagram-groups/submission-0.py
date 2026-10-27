from collections import defaultdict
class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        group_anagrams = defaultdict(list)
        array = []

        for string in strs:
            string_sorted = tuple(sorted(string))
            group_anagrams[string_sorted].append(string)
        
        for value in group_anagrams.values():
            array.append(value)
        
        return array
            

