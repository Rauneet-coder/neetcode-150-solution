from collections import defaultdict
class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        test = defaultdict(int)
        
        for i in nums:
            test[i] += 1

        sorted_num = sorted(test, key=test.get, reverse=True)

        return sorted_nums[:k]