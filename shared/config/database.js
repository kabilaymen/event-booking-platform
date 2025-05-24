const mongoose = require('mongoose');

const connectDB = async (uri) => {
    try {
        const conn = await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`MongoDB connecté: ${conn.connection.host}`);
        return conn;
    } catch (error) {
        console.error('Erreur de connexion à MongoDB:', error);
        throw error;
    }
};

module.exports = { connectDB };
