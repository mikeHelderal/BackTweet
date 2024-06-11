// commentaire.controller.js
import Commentaire from '../models/Commentaire.Model.js';

// Ajouter un commentaire
export const addCommentaire = async (req, res) => {
  try {
    const { id_user, id_tweet, contenu } = req.body;

    if (!id_user || !id_tweet || !contenu) {
      return res.status(400).json({ message: 'User ID, Tweet ID, and content are required' });
    }

    const commentaire = new Commentaire({ id_user, id_tweet, contenu });
    await commentaire.save();

    res.status(201).json(commentaire);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obtenir tous les commentaires
export const getAllCommentaires = async (req, res) => {
  try {
    const commentaires = await Commentaire.find().populate('id_user', 'firstName lastName').populate('id_tweet', 'contenu');
    res.status(200).json(commentaires);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obtenir un commentaire par ID
export const getCommentaireById = async (req, res) => {
  try {
    const { id } = req.params;
    const commentaire = await Commentaire.findById(id).populate('id_user', 'firstName lastName').populate('id_tweet', 'contenu');

    if (!commentaire) {
      return res.status(404).json({ message: 'Commentaire not found' });
    }

    res.status(200).json(commentaire);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Mettre à jour un commentaire
export const updateCommentaire = async (req, res) => {
  try {
    const { id } = req.params;
    const { contenu } = req.body;

    if (!contenu) {
      return res.status(400).json({ message: 'Content is required' });
    }

    const commentaire = await Commentaire.findByIdAndUpdate(id, { contenu }, { new: true });

    if (!commentaire) {
      return res.status(404).json({ message: 'Commentaire not found' });
    }

    res.status(200).json(commentaire);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Supprimer un commentaire
export const deleteCommentaire = async (req, res) => {
  try {
    const { id } = req.params;
    const commentaire = await Commentaire.findByIdAndDelete(id);

    if (!commentaire) {
      return res.status(404).json({ message: 'Commentaire not found' });
    }

    res.status(200).json({ message: 'Commentaire deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
