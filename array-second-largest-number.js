function secondLargestNumber(array) {


    for (i = 0; i < array.length; i++) {

        //*Second loop that will sort the array value.
        for (j = 1; j < array.length; j++) {


            if (array[j - 1] >= array[j]) {

                rightPlace = array[j];
                array[j] = array[j - 1];
                array[j - 1] = rightPlace;
            }
        }
    }
    return array;
}
array = [330, 232, 2342, 3454, 565, 676, 32, 34, 45, 345];
console.log(array);
console.log(secondLargestNumber(array));
console.log(secondLargestNumber(array[1]));