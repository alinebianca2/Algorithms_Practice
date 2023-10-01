class Solution {
    func runningSum(_ nums: [Int]) -> [Int] {
        var runningSumArray = [Int]()
        var sum = 0
    
    for num in nums {
        sum += num
        runningSumArray.append(sum)
    }
    
    return runningSumArray
        
    }
}