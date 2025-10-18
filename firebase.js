// firebase.js
const admin = require('firebase-admin');

// Load your private key JSON
const serviceAccount = require('./firebase-service-account.json');

// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://astra-f5c7a.firebaseio.com' // ✅ Replace with YOUR project ID!
});

// Export Firestore instance
const db = admin.firestore();
module.exports = db;