let testID1;
const testBody1 = {
    "retailer": "M&M Corner Market",
    "purchaseDate": "2022-03-20",
    "purchaseTime": "14:33",
    "items": [
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
    ],
    "total": "9.00"
};

let testID2;
const testBody2 = {
    "retailer": "Target",
    "purchaseDate": "2022-01-01",
    "purchaseTime": "13:01",
    "items": [
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
    ],
    "total": "35.35"
  };

const testBody3 = {
    "retailer": "M&M Corner Market",
    "purchaseDate": "2022-03-20",
    "purchaseTime": "14:33",
    "total": "9.00"
};

async function testProcessHelper(body, expected) {
    const res = await fetch('http://localhost:3000/receipts/process', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    });

    if (res.status !== expected) {
        return false;
    } else if (res.status === 200){
        const data = await res.json();
        if (body.retailer == "M&M Corner Market") {
            testID1 = data.id;
        } else if (body.retailer == "Target"){
            testID2 = data.id;
        }
    }

    return true;
}

/*
* Tests /receipts/process POST endpoint
*/
async function testProcessReceipt() {
    const success = "testProcessReceipt passed!";
    const failure = "testProcessReceipt failed!";

    const result1 = await testProcessHelper(testBody1, 200);
    const result2 = await testProcessHelper(testBody2, 200);
    const result3 = await testProcessHelper(testBody3, 400);
    if (!(result1 && result2 && result3)) {
        return failure;
    }

    return success;
}

async function testIDPointsHelper(id, points, expected) {
    const res = await fetch(`http://localhost:3000/receipts/${id}/points`);
    if (res.status !== expected) {
        return false;
    }
    const data = await res.json();
    if (points !== data.points && expected === 200) {
        return false;
    }
    return true;
}

/*
* Tests /receipts/:id/points GET endpoint
*/
async function testReceiptsIDPoints() {
    const success = "testReceiptsIDPoints passed!";
    const failure = "testReceiptsIDPoints failed!";

    const result1 = await testIDPointsHelper(testID1, 109, 200);
    const result2 = await testIDPointsHelper(testID2, 28, 200);
    const result3 = await testIDPointsHelper("123456789", "0", 404);

    if (!(result1 && result2 && result3)) {
        return failure;
    }

    return success;
}


async function runEndpointTests() {
    console.log(await testProcessReceipt());
    console.log(await testReceiptsIDPoints());
}

runEndpointTests();