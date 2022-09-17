const { project, clients } = require('../sampleData.js')
const { GraphQLObjectType, GraphQLID, GraphQLString } = require('graphql');

const clientType = new GraphQLObjectType({
    name: 'Client',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        phone: { type: GraphQLString }
    })
});

const RootQuery = new GraphQLObjectType({
    name:'RootQueryType',
    
})