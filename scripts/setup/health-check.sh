#!/bin/bash

echo "🔍 Vérification de l'état des services..."

services=("user-service:3001" "event-service:3002" "booking-service:3003" "payment-service:3004" "streaming-service:3005" "notification-service:3006")

for service in "${services[@]}"; do
    name=${service%:*}
    port=${service#*:}
    
    if curl -s http://localhost:$port/health > /dev/null; then
        echo "✅ $name - OK"
    else
        echo "❌ $name - ERREUR"
    fi
done
