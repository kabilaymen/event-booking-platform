const axios = require('axios');

async function basicLoadTest() {
    console.log('🔥 Test de charge basique');
    console.log('📊 Test de 50 requêtes simultanées sur les health checks');
    
    const services = [3001, 3002, 3003, 3004, 3005, 3006];
    const requests = [];
    
    // Créer 50 requêtes simultanées
    for (let i = 0; i < 50; i++) {
        const port = services[i % services.length];
        requests.push(
            axios.get(`http://localhost:${port}/health`)
                .then(() => ({ success: true, port }))
                .catch(() => ({ success: false, port }))
        );
    }
    
    const startTime = Date.now();
    const results = await Promise.all(requests);
    const endTime = Date.now();
    
    const successful = results.filter(r => r.success).length;
    const failed = results.filter(r => !r.success).length;
    
    console.log(`✅ Succès: ${successful}`);
    console.log(`❌ Échecs: ${failed}`);
    console.log(`⏱️ Temps total: ${endTime - startTime}ms`);
    console.log(`⚡ Moyenne: ${(endTime - startTime) / 50}ms par requête`);
}

if (require.main === module) {
    basicLoadTest().catch(console.error);
}

module.exports = basicLoadTest;
