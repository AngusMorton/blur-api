// Bring in our dependencies
const app = require('express')();
const routes = require('./routes');

//  Connect all our routes to our application
app.use('/', routes);


const server = app.listen(process.env.PORT || 8080, () => {
    const port = server.address().port;
    console.log(`App listening on port ${port}`);
});