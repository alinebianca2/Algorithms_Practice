/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let givenArray = nums;
    let runningSumArray = [];

    for(var i = 0; i < givenArray.length; i++) {
        let sum = 0;
        for(var k = 0; k <=i ; k++){
            sum += givenArray[k];
            
        }
        runningSumArray.push(sum)
       
    }
    return runningSumArray;
};