// Bring in our dependencies
const app = require('express')();
const routes = require('./routes');
YAML = require('yamljs');
const swaggerDoc = YAML.load('./openapi.yaml');
const swaggerTools = require('swagger-tools');

swaggerTools.initializeMiddleware(swaggerDoc, function (middleware) {
  // Serve the Swagger documents and Swagger UI
  app.use(middleware.swaggerUi());
});

//  Connect all our routes to our application
app.use('/', routes);


const server = app.listen(process.env.PORT || 8080, () => {
    const port = server.address().port;
    console.log(`App listening on port ${port}`);
});