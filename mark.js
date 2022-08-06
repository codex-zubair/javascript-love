function grade(mark) {



    // switch (mark) {
    //     case mark <=30:
    //         {
    //             console.log("F");
    //             break;
    //         }
    //     case mark >=40:
    //         {
    //             console.log("D");
    //             break;
    //         }
    //     case mark >=60:
    //         {
    //             console.log("C");
    //             break;
    //         }
    //     case mark >=70:
    //         {
    //             console.log("B");
    //             break;
    //         }
    //     case mark >=80:
    //         {
    //             console.log("A");
    //             break;
    //         }
    //     case mark >=85:
    //         {
    //             console.log("A+");
    //             break;
    //         }

    //     default:
    //         {
    //             console.log("Not Working");
    //         }
    // }

    if (mark <= 30) {
        console.log("F");
    }
    else if (mark <= 40) {
        console.log("D");
    }
    else if (mark <= 50) {
        console.log("C");
    }
    else if (mark <= 60) {
        console.log("B");
    }
    else if (mark <= 70) {
        console.log("A");
    }
    else if (mark <= 80) {
        console.log("A+");
    }

    else {
        console.log("enter correct Value");
    }



}

grade(0);