const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schemas/schema');

const app = express();
const port = process.env.PORT || 4000;

app.get('/', (req, res) => {
  res.send("use '/graphql' endpoint");
});

app.use('/graphql',
  graphqlHTTP({
    graphiql: true,
    schema: schema
  })
);

app.listen(port, () => {
  console.log('app is listening on port ' + port);
});
