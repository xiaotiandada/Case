// 1. 两数之和
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

// 7. 整数反转
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let xStr = x+''
    let booLeanStr = xStr.substr(0,1) === '-' 
    let numStr = xStr.split('').reverse().join('')
    return booLeanStr ? parseInt('-'+numStr) : parseInt(numStr) 
};
