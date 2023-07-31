/* Given an integer array nums, move all 0’s to the end of it while maintaining the relative order of the non-zero elements.*/

function moveZeros(nums) {
    let left = 0;
    let right = 0;
    const n = nums.length;
    const arr = []
    while(right < n) {
        if(nums[right] === 0) {
            right++;
        } else {
            nums[left] = nums[right]
            right++;
            left++
        }
    }

    // left termina con la posicion del array que empieza con 0
    for(let i = left; i<nums.length; i++) {
        nums[i] = 0;
    }

    return nums;
}

const nums1 = [4,8,0,1,0,2,3,0];
const nums2 = [0,0,1,1,1,1,1,0,0,0,12,0,3]
console.log(moveZeros(nums2))