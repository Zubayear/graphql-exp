import express from 'express'
import { graphqlHTTP } from "express-graphql";
import { schema } from './data/schema';

const app = express();

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
}));

app.listen(9000, () => console.log('Listening on port 9000'));