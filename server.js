const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

const PORT = 8080;

const professionalData = {
  professionalName: 'Camilo Serna',

  base64Image: '',

  nameLink: {
    firstName: 'Camilo',
    url: 'https://github.com/Camocros'
  },

  primaryDescription: 'Software development student.',

  workDescription1: 'Learning backend development with Node.js.',

  workDescription2: 'Working with REST APIs and JavaScript.',

  linkTitleText: 'My Links',

  linkedInLink: {
    text: 'LinkedIn',
    link: 'https://linkedin.com'
  },

  githubLink: {
    text: 'GitHub',
    link: 'https://github.com/Camocros'
  }
};

app.get('/professional', (req, res) => {
  res.json(professionalData);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});