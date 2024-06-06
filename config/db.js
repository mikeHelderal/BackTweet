import mongoose from "mongoose";


const connectDB = (mongoURL) => {
    mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log('Connexion à MongoDB réussie !'))
        .catch((error) => console.error('Erreur de connexion à MongoDB :', error));
};

export default connectDB;
