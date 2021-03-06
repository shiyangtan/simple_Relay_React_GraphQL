/*
  GraphQL schema to describe attributes in MySQL
*/

// import {GraphQLList, GraphQLObjectType, GraphQLSchema, GraphQLString} from 'graphql';

var {GraphQLList} = require('graphql');
var {GraphQLObjectType} = require('graphql');
var {GraphQLSchema} = require('graphql');
var {GraphQLString} = require('graphql');

var query = require('../mysql/query.js');


// attributes of city
let CityType = new GraphQLObjectType({
  name: 'City',
  fields: () => ({
    city_name: {
      type: GraphQLString
    }
  }),
});

// a list of cities
let CityListType = new GraphQLObjectType({
  name: 'CityList',
  fields: () => ({
    city_list: {
      type: new GraphQLList(CityType),
      resolve: (city_search) => {
        return city_search
      }
    }
  }),
});


// root query
let RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  fields: () => ({
    city_search: {
      type: CityListType,
      args: {
        search_term: {type: GraphQLString},
      },
      resolve: (_, {search_term}) => {
          return query(search_term).then((results) => {
            console.log("SQL said " + results);
            return results;
          }).catch((error) => {
            console.log(error);
          });
      },
    }
  }),
});


var schema = new GraphQLSchema({
  query: RootQuery
});

module.exports = schema;
