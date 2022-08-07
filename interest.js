function interest(principle, ratePercent, year) {

    let ratePercentage = parseFloat(ratePercent / 100);
    return console.log(principle * ratePercentage * year);
}
interest(2000, 5, 3);