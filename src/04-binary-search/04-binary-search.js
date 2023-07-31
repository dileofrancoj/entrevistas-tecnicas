function binarySearch(arr,target){
    // ¿Que pasa si no encuentro el target dentro de la lista -> -1
    let left = 0;
    let right = arr.length -1
    while(left <= right) {
        const mid = Math.floor((left + right) / 2);
        const midValue = arr[mid];

        if(midValue === target) {
            return mid;
        } else if(midValue < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}

const orderedList = [1,3,5,7,9,11,15,32,94]
const target = 1;

console.log(binarySearch(orderedList,target))
orderedList.find((item) => item === target) // o(n)
// Hipo: lista ordeanda -> O(log n)