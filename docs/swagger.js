'use strict';

const generateSwagger = (app) => {
  const expressSwagger = require('express-swagger-generator')(app);

  let options = {
    swaggerDefinition: {
      info: {
        description: 'Access CRUD operations for music-app user',
        title: 'My API Server',
        version: '1.0.0',
      },
      host: 'localhost:3000',
      basePath: '/',
      produces: ['application/json', 'text/html'],
      schemes: ['http'],
      securityDefinitions: {
        JWT: {
          type: 'apiKey',
          in: 'header',
          name: 'Authorization',
          description: '',
        },
      },
    },
    basedir: __dirname, //app absolute path
    files: ['../lib/server.js', '../route/*'], //Path to the API handlers
  };

  expressSwagger(options);
};

module.exports = generateSwagger;