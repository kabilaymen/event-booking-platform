const express = require('express');
const router = express.Router();

// Documentation des routes
router.get('/docs', (req, res) => {
    res.json({
        service: process.env.SERVICE_NAME || 'Microservice',
        routes: {
            'GET /health': 'Vérification de l\'état du service',
            'GET /api/docs': 'Documentation de l\'API',
        },
        version: '1.0.0'
    });
});

module.exports = router;
