function findingSmallestValue(arrayValue) {

    let smallValue = arrayValue[0];

    for (i = 0; i < arrayValue.length; i++) {


        if (smallValue > arrayValue[i]) {
            smallValue = arrayValue[i];
        }

        else {
            continue;
        }



    }
    return smallValue;

}





arrayValue = [10, 23, 343, 4, 565, 67, 45, 1, 34, 546, 3, 500];

console.log(findingSmallestValue(arrayValue));