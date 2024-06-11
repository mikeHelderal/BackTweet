// media.controller.js
import Media from '../models/Media.Model.js';

// Ajouter un média
export const addMedia = async (req, res) => {
  try {
    const { id_tweet, id_commentaire, contenu } = req.body;

    if (!id_tweet || !id_commentaire || !contenu) {
      return res.status(400).json({ message: 'Tweet ID, Commentaire ID, and content are required' });
    }

    const media = new Media({ id_tweet, id_commentaire, contenu });
    await media.save();

    res.status(201).json(media);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obtenir tous les médias
export const getAllMedia = async (req, res) => {
  try {
    const media = await Media.find().populate('id_tweet', 'contenu').populate('id_commentaire', 'contenu');
    res.status(200).json(media);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obtenir un média par ID
export const getMediaById = async (req, res) => {
  try {
    const { id } = req.params;
    const media = await Media.findById(id).populate('id_tweet', 'contenu').populate('id_commentaire', 'contenu');

    if (!media) {
      return res.status(404).json({ message: 'Media not found' });
    }

    res.status(200).json(media);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Mettre à jour un média
export const updateMedia = async (req, res) => {
  try {
    const { id } = req.params;
    const { contenu } = req.body;

    if (!contenu) {
      return res.status(400).json({ message: 'Content is required' });
    }

    const media = await Media.findByIdAndUpdate(id, { contenu }, { new: true });

    if (!media) {
      return res.status(404).json({ message: 'Media not found' });
    }

    res.status(200).json(media);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Supprimer un média
export const deleteMedia = async (req, res) => {
  try {
    const { id } = req.params;
    const media = await Media.findByIdAndDelete(id);

    if (!media) {
      return res.status(404).json({ message: 'Media not found' });
    }

    res.status(200).json({ message: 'Media deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
