/**
 *   Return the second largest number in the array.
 *   @param {Number[]} nums - An array of numbers.
 *   @return {Number} The second largest number in the array.
 **/
function getSecondLargest(nums) {
    for (let i = 0; i<nums.length; i++ ) {
        for(let j = 0; j<nums.length; j++){
            if(nums[j+1] < nums[j]){
                let tmp = nums[j+1]
                nums[j+1] = nums[j];
                nums[j] = tmp;
            }
        }
    }
    let i = nums.length-1;
    while(nums[i] === nums[nums.length-1]){
        i--;
    }
    return nums[i];
}

exports.getSecondLargest = getSecondLargest;
