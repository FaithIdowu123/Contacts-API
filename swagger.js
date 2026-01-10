const swaggerautogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Contacts API',
    description: 'A simple Contacts API',
  },
  host: 'https://contacts-api-v6de.onrender.com/api',
  schemes: ['https'],
};  
const outputFile = './swagger.json';
const endpointsFiles = ['./routes/contacts.js'];
swaggerautogen(outputFile, endpointsFiles, doc);
