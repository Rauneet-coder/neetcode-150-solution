class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let array = []
        for (let i = 0; i< nums.length; i++){
            for (let j = i + 1; j < nums.length; j++){
              if (nums[i] == nums [j]){
                if(!array.includes.nums[i]){
                    array.push.nums[i]
                }
              }
                
              
            }
        }
         return array;
    }
}
