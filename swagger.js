const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Contacts API',
    description: 'Contacts API for CSE 341'
  },
  // TODO: Replace with your actual Render URL, for example: 'my-project.onrender.com'
  // Or, you can use process.env.HOST if you have it set in your .env file
  host: 'localhost:3001',
  schemes: ['http', 'https']
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./routes/index.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);
