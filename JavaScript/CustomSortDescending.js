function customSortDescending(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
                // Swap elements if they are in the wrong order
                const temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

const originalArray = [4, 9, 2, 5, 1, 8];
const descendingArray = customSortDescending(originalArray);

console.log("Original array:", originalArray);
console.log("Descending sorted array:", descendingArray);
