// media.routes.js
import express from 'express';
import { addMedia, getAllMedia, getMediaById, updateMedia, deleteMedia } from '../Controllers/Media.Controller.js';

const router = express.Router();
import { verifieToken } from '../Utils/Auth.js';


router.post('/media',verifieToken, addMedia);
router.get('/media',verifieToken, getAllMedia);
router.get('/media/:id',verifieToken, getMediaById);
router.put('/media/:id',verifieToken, updateMedia);
router.delete('/media/:id',verifieToken, deleteMedia);

export default router;
