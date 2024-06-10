// env.js
import dotenv from "dotenv"
// Charger les variables d'environnement depuis le fichier .env
dotenv.config();

export const ENV  = {
    mongo: process.env.MONGO_URI
}