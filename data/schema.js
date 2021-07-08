import { makeExecutableSchema } from 'graphql-tools';
import { resolvers } from './resolvers';

const typeDefs = 
`
    type Show {
        id: ID,
        name: String,
        releaseYear: Int,
        episodes: Int,
        cast: [Cast]
    }

    type Cast {
        name: String
    }

    input CastInput {
        name: String
    }

    input ShowInput {
        id: ID,
        name: String,
        releaseYear: Int,
        episodes: Int,
        cast: [CastInput]
    }

    type Mutation {
        createShow(input: ShowInput): Show
        updateShow(input: ShowInput): Show
        deleteShow(id: ID!): String
    }

    type Query {
        getShow(id: ID): Show
    }
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

export {schema};