// Question: Pourquoi est-il important de valider les variables d'environnement au démarrage ?
// Réponse : Cela garantit que l'application dispose de toutes les informations nécessaires avant de démarrer, évitant ainsi des erreurs imprévisibles.
// Question: Que se passe-t-il si une variable requise est manquante ?
// Réponse : L'application doit arrêter son démarrage et signaler clairement quelle variable manque.

const dotenv = require('dotenv');
dotenv.config();

const requiredEnvVars = ['MONGODB_URI', 'MONGODB_DB_NAME', 'REDIS_URI'];

function validateEnv() {
  const missingVars = requiredEnvVars.filter((varName) => !process.env[varName]);
  if (missingVars.length > 0) {
    throw new Error(`Missing environment variables: ${missingVars.join(', ')}`);
  }
}

validateEnv();

module.exports = {
  mongodb: {
    uri: process.env.MONGODB_URI,
    dbName: process.env.MONGODB_DB_NAME,
  },
  redis: {
    uri: process.env.REDIS_URI,
  },
  port: process.env.PORT || 3000,
};