# 🎭 Plateforme de Réservation d'Événements

Architecture microservices moderne pour la gestion d'événements et réservations en ligne.

## 🏗️ Architecture

Cette plateforme utilise une architecture en microservices avec les composants suivants :

### Services Core
- **User Service** (Port 3001) - Gestion des utilisateurs et authentification
- **Event Service** (Port 3002) - Catalogue et gestion des événements
- **Booking Service** (Port 3003) - Réservations et billetterie
- **Payment Service** (Port 3004) - Traitement des paiements
- **Streaming Service** (Port 3005) - Diffusion vidéo en direct
- **Notification Service** (Port 3006) - Notifications temps réel

### Infrastructure
- **MongoDB** - Base de données principale
- **Redis** - Cache et sessions
- **Kafka** - Message broker
- **Nginx** - API Gateway et load balancer

## 🚀 Démarrage Rapide

### Prérequis
- Node.js 18+
- Docker & Docker Compose
- Git

### Installation

1. **Cloner et installer les dépendances :**
```bash
npm run install-all
```

2. **Démarrer en mode développement :**
```bash
# Tous les services
npm run dev:all

# Service spécifique
npm run dev:user
```

3. **Démarrer avec Docker :**
```bash
npm run docker:up
```

## 📡 Endpoints Principaux

- **API Gateway**: http://localhost
- **User Service**: http://localhost:3001
- **Event Service**: http://localhost:3002
- **Booking Service**: http://localhost:3003
- **Payment Service**: http://localhost:3004
- **Streaming Service**: http://localhost:3005
- **Notifications**: http://localhost:3006

### Health Checks
Chaque service expose un endpoint `/health` pour monitoring.

## 🧪 Tests

```bash
# Tests unitaires
npm test

# Tests d'intégration
npm run test:integration

# Tests end-to-end
npm run test:e2e
```

## 📦 Structure du Projet

```
event-booking-platform/
├── services/           # Microservices
│   ├── user-service/
│   ├── event-service/
│   ├── booking-service/
│   ├── payment-service/
│   ├── streaming-service/
│   └── notification-service/
├── shared/            # Composants partagés
├── infrastructure/    # Configuration Docker/K8s
├── tests/            # Tests d'intégration
└── docs/             # Documentation
```

## 🔒 Sécurité

- Authentification JWT
- Chiffrement des données sensibles
- Rate limiting
- Validation des entrées
- Audit des transactions

## 📊 Monitoring

- Logs centralisés avec Winston
- Métriques avec Prometheus
- Dashboards Grafana
- Health checks automatiques

## 🚀 Déploiement

### Développement
```bash
npm run dev:all
```

### Production
```bash
npm run docker:build
npm run docker:up
```

### Kubernetes
```bash
kubectl apply -k infrastructure/kubernetes/
```

## 📚 Documentation API

Chaque service expose sa documentation sur `/api/docs`

## 🤝 Contribution

1. Fork le projet
2. Créer une branche feature
3. Committer les changements
4. Pousser vers la branche
5. Ouvrir une Pull Request

## 📄 Licence

MIT License - voir le fichier LICENSE pour plus de détails.
