// 1. 两数之和
{
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for(let i = 0;i<nums.length;i++)
        if (nums[i]+nums[i+1] === target)
            return [i,i+1]
};
