/*
Requirements
One point for every alphanumeric character in the retailer name.
50 points if the total is a round dollar amount with no cents.
25 points if the total is a multiple of 0.25.
5 points for every two items on the receipt.
If the trimmed length of the item description is a multiple of 3, multiply the price by 0.2 and round up to the nearest integer. The result is the number of points earned.
6 points if the day in the purchase date is odd.
10 points if the time of purchase is after 2:00pm and before 4:00pm
*/

import { getReceipts } from "./process-receipt.js";

// One point for every alphanumeric character in the retailer name.
export function countCharacters(retailerName) {
    retailerName = retailerName.replace(/[^a-zA-Z0-9]/g, "");
    return retailerName.length;
}

// 5 points for every two items on the receipt.
export function countTwoItems(numItems) {
    const twoCount = Math.floor(numItems / 2);
    return (5 * twoCount);
}

// 50 points if the total is a round dollar amount with no cents.
export function totalIsRound(total) {
    return (total % 1 === 0 ? 50 : 0);
}

// 25 points if the total is a multiple of 0.25.
export function totalIsMultiple(total) {
    return (total % 0.25 === 0 ? 25 : 0);
}

// If the trimmed length of the item description is a multiple of 3, multiply the price by 0.2 and round up to the nearest integer.
// The result is the number of points earned.
export function lengthsAreMultiples(items) {
    let itemPoints = 0;
    items.forEach(item => {
        if (item["shortDescription"].trim().length % 3 === 0) {
            itemPoints += Math.ceil(Number(item["price"]) * 0.2);
        }
    });
    return itemPoints;
}

// 6 points if the day in the purchase date is odd.
export function dateIsOdd(date) {
    date = date.match(/\d{4}-\d{2}-(\d{2})/);
    return (Number(date[1]) % 2 === 0 ? 0 : 6);
}

// 10 points if the time of purchase is after 2:00pm and before 4:00pm
export function checkPurchaseTime(time) {
    time = time.match(/\d{2}/g);
    const hours = Number(time[0]);
    const minutes = Number(time[1]);
    const purchaseMinutes = hours * 60 + minutes; // calculate in terms of minutes to make comparisons easier
    const lowerMinuteBoundary = 14 * 60;
    const upperMinuteBoundary = 16 * 60;
    return (purchaseMinutes > lowerMinuteBoundary && purchaseMinutes < upperMinuteBoundary ? 10 : 0);
}

// calculate and return number of points for receipt matching id parameter
export function calculatePoints(id) {
    const receipts = getReceipts();
    const targetReceipt = receipts[id];
    let points = 0;

    const retailerName = targetReceipt["retailer"];
    const items = targetReceipt["items"];
    const itemsCount = items.length;
    const total = Number(targetReceipt["total"]);
    const date = targetReceipt["purchaseDate"];
    const time = targetReceipt["purchaseTime"];

    points += countCharacters(retailerName);
    points += countTwoItems(itemsCount);
    points += totalIsRound(total);
    points += totalIsMultiple(total);
    points += lengthsAreMultiples(items);
    points += dateIsOdd(date);
    points += checkPurchaseTime(time);

    return points;
}