const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3005;
const SERVICE_NAME = process.env.SERVICE_NAME || 'default-service';

// Middleware
app.use(helmet());
app.use(cors());
app.use(morgan('combined'));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Routes de base
app.get('/health', (req, res) => {
    res.status(200).json({ 
        service: 'streaming-service',
        status: 'healthy',
        timestamp: new Date().toISOString(),
        port: PORT
    });
});

app.get('/', (req, res) => {
    res.json({ 
        message: 'Bienvenue sur le streaming-service',
        version: '1.0.0',
        documentation: '/api/docs'
    });
});

// Routes du service
const routes = require('./routes');
app.use('/api', routes);

// Gestion des erreurs
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ 
        error: 'Erreur interne du serveur',
        service: 'streaming-service'
    });
});

// Route 404
app.use('*', (req, res) => {
    res.status(404).json({ 
        error: 'Route non trouvée',
        service: 'streaming-service'
    });
});

app.listen(PORT, () => {
    console.log(`🚀 ${SERVICE_NAME} démarré sur le port ${PORT}`);
    console.log(`📖 Documentation: http://localhost:${PORT}/api/docs`);
    console.log(`💓 Health check: http://localhost:${PORT}/health`);
});

module.exports = app;
