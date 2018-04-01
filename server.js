var admin = require('firebase-admin');

var serviceAccount = require('../ezsplit-199720-firebase-adminsdk-t96yg-b70350bd7c.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://ezsplit-199720.firebaseio.com'
});