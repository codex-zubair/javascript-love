function smallestNumber(a, b, c) {
    if (a > b && c > b) {
        console.log("Smallest Number B :" + b);
    }

    else if (b > c && a > c) {
        console.log("Smallest Number C:" + c);
    }

    else {
        console.log("Smallest Number A:" + a);
    }

}


smallestNumber(5, 1, 3);