import express from 'express';
import {calculatePoints} from './calculate-points.js';
import { processReceipt, checkForReceipt } from './process-receipt.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log('Server Listening on PORT:', PORT);
});

app.use(express.json());

/*
 * POST /receipts/process
 * 
 * Accepts receipt JSON, generates unique ID and processes receipt, returns receipt id.
 * 
 * Example Request Body:
 * {
 *    "retailer": "M&M Market",
 *    "purchaseDate": "2023-01-01",
 *    "purchaseTime": "14:30",
 *    "items": [
 *      "shortDescription" :,
 *      "price" : "12.79"
 *    ],
 *    "total": "23.45"
 * }
 * 
 * Example Response:
 * {
 *    "id": "c63b7249-be2b-4c6e-ab2e-22c2f368e740"
 * }
 */
app.post('/receipts/process', (req, res, next) => {
    const receipt = req.body;

    try {
        const id = processReceipt(receipt);
        res.send({ "id" : id });
    } catch(err) {
        next(err);
    }
});

/*
 * GET /receipts/:id/points
 * 
 * Calculates points for a specific receipt
 * 
 * Path Param - id: the id of the receipt to calculate points for.
 * 
 * Example Response:
 * {
 *    "points": "32"
 * }
 */
app.get('/receipts/:id/points', (req, res, next) => {
    const id = req.params.id;
    if (!checkForReceipt(id)) {
        const error = new Error('No receipt found for that ID.');
        error.status = 404;
        return next(error);
    }

    try {
        const points = calculatePoints(id);
        res.send({ "points" : points});
    } catch(err) {
        next(err);
    }
});

app.use((err, req, res, next) => {
    console.error(err);
    if (err.status === 400) {
        return res.status(400).json({ error: 'Bad Request', message: err.message });
    } else if (err.status === 404) {
        return res.status(404).json({ error: 'Not Found', message : err.message });
    } else {
        return res.status(500).json({ error: 'Internal Server Error', message: 'Something went wrong. Please try again later.' });
    }
});
