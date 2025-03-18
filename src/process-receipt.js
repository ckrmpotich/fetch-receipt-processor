const receipts = {};

export function getReceipts() {
    return receipts;
}

export function verifyReceipt(receipt) {
    if (!receipt.retailer || !receipt.purchaseDate || !receipt.purchaseTime || !receipt.items || !receipt.total) {
        const error = new Error('The receipt is invalid.');
        error.status = 400;
        throw error;
    }

    // any other receipt verification checks would go here
}

export function checkForReceipt(id) {
    return receipts[id];
}

export function processReceipt(receipt) {
    verifyReceipt(receipt);
    const id = crypto.randomUUID();
    receipts[id] = receipt;
    return id;
}