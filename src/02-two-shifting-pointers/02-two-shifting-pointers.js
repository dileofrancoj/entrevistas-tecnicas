function twoSum(arr,target){
    let left=0;
    let right = arr.length -1;

    while(left < right) {
        const sum = arr[left]+ arr[right];
        if(sum === target) return [left,right];
        if(sum > target) {
            right--;
        } else {
            left++
        }
    }
    // No hay solución
    return []
}

const arr = [2,7,11,15,18];
const target = 25;

console.log(twoSum(arr,target))