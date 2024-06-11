// commentaire.routes.js
import express from 'express';
import { addCommentaire, getAllCommentaires, getCommentaireById, updateCommentaire, deleteCommentaire } from '../Controllers/Commentaire.Controller.js';

import { verifieToken } from '../auth.js';


const router = express.Router();

router.post('/add', verifieToken, addCommentaire);
router.get('/getAll',verifieToken, getAllCommentaires);
router.get('/commentaires/:id',verifieToken, getCommentaireById);
router.put('/commentaires/:id',verifieToken, updateCommentaire);
router.delete('/commentaires/:id',verifieToken, deleteCommentaire);

export default router;
