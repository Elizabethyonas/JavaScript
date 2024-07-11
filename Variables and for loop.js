// two ways to define a variable in javascript
// var num = [1, 2, 3, 4, 5] or var num = new Array (1, 2, 3, 4, 5);
// for (i = 0; i < 5; i++) {
//     console.log(num[i]);
    
// }

var arr = new Array (7, 2, 8, 1, 3, 4);
var i, j, temp;
console.log("Before sort");
for (i = 0; i < 6; i++) {
    console.log(arr[i])
}

for (i = 0; i < 6; i++) {
    for (j = 0; j < 5; j++) {
        if (arr[j] > arr[j + 1]) {
            temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
}

console.log("After Sort");
for (i = 0; i < 6; i++) {
    console.log(arr[i]);
}