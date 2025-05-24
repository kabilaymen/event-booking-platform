#!/bin/bash

echo "🚀 Démarrage rapide de la plateforme"

# Installation des dépendances
echo "📦 Installation des dépendances..."
npm run install-all

# Démarrage des services
echo "🏃 Démarrage des services..."
npm run dev:all

echo "✅ Plateforme démarrée avec succès!"
echo "🌐 API Gateway: http://localhost"
echo "📊 Services disponibles sur les ports 3001-3006"
