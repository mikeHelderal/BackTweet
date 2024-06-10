// tweet.routes.js
import express from 'express';
import { createTweet, getTweets, getTweetById, updateTweet, deleteTweet } from '../Controllers/Tweet.Controller.js';

import { verifieToken } from '../auth.js';

const router = express.Router();

router.post('/', verifieToken, createTweet);
router.get('/tweets',verifieToken, getTweets);
router.get('/tweets/:id',verifieToken, getTweetById);
router.put('/tweets/:id',verifieToken, updateTweet);
router.delete('/tweets/:id',verifieToken, deleteTweet);

export default router;
