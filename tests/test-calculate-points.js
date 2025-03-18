import * as points from '../src/calculate-points.js';

/*
* Tests countCharacters function for correct functionality
*/
function testCountCharacters() {
    const success = "testCountCharacters passed!";
    const failure = "testCountCharacters failed!";

    // test 1
    const testString1 = "Home Depot";
    if (points.countCharacters(testString1) !== 9) {
        return failure;
    }
    // test 2
    const testString2 = "1234 Store s !!-";
    if (points.countCharacters(testString2) !== 10) {
        return failure;
    }
    // test 3
    const testString3 = "";
    if (points.countCharacters(testString3) !== 0) {
        return failure;
    }

    return success;
}

/*
* Tests countTwoItems function for correct functionality
*/
function testCountTwoItems() {
    const success = "testCountTwoItems passed!";
    const failure = "testCountTwoItems failed!";

    // test 1
    const testItems1 = {"items": [
        {
        "shortDescription": "Mountain Dew 12PK",
        "price": "6.49"
        },{
        "shortDescription": "Emils Cheese Pizza",
        "price": "12.25"
        },{
        "shortDescription": "Knorr Creamy Chicken",
        "price": "1.26"
        },{
        "shortDescription": "Doritos Nacho Cheese",
        "price": "3.35"
        },{
        "shortDescription": "   Klarbrunn 12-PK 12 FL OZ  ",
        "price": "12.00"
        }
    ]};
    if (points.countTwoItems(testItems1["items"].length) !== 2 * 5) {
        return failure;
    }
    // test 2
    const testItems2 = {"items": [
        {
        "shortDescription": "Gatorade",
        "price": "2.25"
        },{
        "shortDescription": "Gatorade",
        "price": "2.25"
        },{
        "shortDescription": "Gatorade",
        "price": "2.25"
        },{
        "shortDescription": "Gatorade",
        "price": "2.25"
        }
    ]};
    if (points.countTwoItems(testItems2["items"].length) !== 2 * 5) {
        return failure;
    }
    // test 3
    const testItems3 = {"items": [
    ]};
    if (points.countTwoItems(testItems3["items"].length) !== 0) {
        return failure;
    }

    return success;
}

/*
* Tests totalIsRound function for correct functionality
*/
function testTotalIsRound() {
    const success = "testTotalIsRound passed!";
    const failure = "testTotalIsRound failed!";

    // test 1
    const testTotal1 = 9.00
    if (points.totalIsRound(testTotal1) !== 50) {
        return failure;
    }
    // test 2
    const testTotal2 = 17.24
    if (points.totalIsRound(testTotal2) !== 0) {
        return failure;
    }
    // test 3
    const testTotal3 = 20.00
    if (points.totalIsRound(testTotal3) !== 50) {
        return failure;
    }

    return success;
}

/*
* Tests totalIsMultiple function for correct functionality
*/
function testTotalIsMultiple() {
    const success = "testTotalIsMultiple passed!";
    const failure = "testTotalIsMultiple failed!";

    // test 1
    const testTotal1 = 20.25;
    if (points.totalIsMultiple(testTotal1) !== 25) {
        return failure;
    }
    // test 2
    const testTotal2 = 9.79;
    if (points.totalIsMultiple(testTotal2) !== 0) {
        return failure;
    }
    // test 3
    const testTotal3 = 0.26;
    if (points.totalIsMultiple(testTotal3) !== 0) {
        return failure;
    }

    return success;
}

/*
* Tests lengthsAreMultiples function for correct functionality
*/
function testLengthsAreMultiples() {
    const success = "testLengthsAreMultiples passed!";
    const failure = "testLengthsAreMultiples failed!";

    // test 1
    const testItems1 = {"items": [
        {
        "shortDescription": "Mountain Dew 12PK",
        "price": "6.49"
        },{
        "shortDescription": "Emils Cheese Pizza",
        "price": "12.25"
        },{
        "shortDescription": "Knorr Creamy Chicken",
        "price": "1.26"
        },{
        "shortDescription": "Doritos Nacho Cheese",
        "price": "3.35"
        },{
        "shortDescription": "   Klarbrunn 12-PK 12 FL OZ  ",
        "price": "12.00"
        }
    ]};
    if (points.lengthsAreMultiples(testItems1["items"]) !== 6) {
        return failure;
    }
    // test 2
    const testItems2 = {"items": [
        {
        "shortDescription": "Gatorade",
        "price": "2.25"
        },{
        "shortDescription": "Gatorade",
        "price": "2.25"
        },{
        "shortDescription": "Gatorade",
        "price": "2.25"
        },{
        "shortDescription": "Gatorade",
        "price": "2.25"
        }
    ]};
    if (points.lengthsAreMultiples(testItems2["items"]) !== 0) {
        return failure;
    }
    // test 3
    const testItems3 = {"items": [
    ]};
    if (points.countTwoItems(testItems3["items"].length) !== 0) {
        return failure;
    }

    return success;
}

/*
* Tests dateIsOdd function for correct functionality
*/
function testDateIsOdd() {
    const success = "testDateIsOdd passed!";
    const failure = "testDateIsOdd failed!";

    // test 1
    const testDate1 = "2022-03-20";
    if (points.dateIsOdd(testDate1) !== 0) {
        return failure;
    }
    // test 2
    const testDate2 = "2022-01-01";
    if (points.dateIsOdd(testDate2) !== 6) {
        return failure;
    }
    // test 3
    const testDate3 = "2025-03-15";
    if (points.dateIsOdd(testDate3) !== 6) {
        return failure;
    }

    return success;
}

/*
* Tests checkPurchaseTime function for correct functionality
*/
function testCheckPurchaseTime() {
    const success = "testCheckPurchaseTime passed!";
    const failure = "testCheckPurchaseTime failed!";

    // test 1
    const testTime1 = "16:00";
    if (points.checkPurchaseTime(testTime1) !== 0) {
        return failure;
    }
    // test 2
    const testTime2 = "14:00";
    if (points.checkPurchaseTime(testTime2) !== 0) {
        return failure;
    }
    // test 3
    const testTime3 = "15:31";
    if (points.checkPurchaseTime(testTime3) !== 10) {
        return failure;
    }

    return success;
}

/*
* Runs point calculation tests
*/
function runTests() {
    console.log(testCountCharacters());
    console.log(testCountTwoItems());
    console.log(testTotalIsRound());
    console.log(testTotalIsMultiple());
    console.log(testLengthsAreMultiples());
    console.log(testDateIsOdd());
    console.log(testCheckPurchaseTime());
}

runTests();