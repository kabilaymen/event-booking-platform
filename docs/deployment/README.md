# Guide de Déploiement

## Environnements

### Développement Local

1. **Installation des dépendances :**
```bash
npm run install-all
```

2. **Configuration des variables d'environnement :**
```bash
# Copier les fichiers .env.example vers .env dans chaque service
find services -name ".env.example" -exec sh -c 'cp "$1" "${1%.example}"' _ {} \;
```

3. **Démarrage des services :**
```bash
npm run dev:all
```

### Docker

1. **Build des images :**
```bash
npm run docker:build
```

2. **Démarrage des conteneurs :**
```bash
npm run docker:up
```

3. **Vérification :**
```bash
docker-compose -f infrastructure/docker/docker-compose.yml ps
```

### Production

Voir la documentation Kubernetes dans `/infrastructure/kubernetes/`

## Monitoring

- **Logs** : `docker-compose logs -f [service-name]`
- **Health Checks** : http://localhost/health
- **Métriques** : http://localhost:9090 (Prometheus)
