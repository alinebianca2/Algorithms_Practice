/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let runningSumArray = [];
    let sum = 0;

    for (let num of nums) {
        sum += num;
        runningSumArray.push(sum);
    }

    return runningSumArray;
};
