/*
import fs from 'fs';
import path from 'path';
import {graphql}  from 'graphql';
import {introspectionQuery, printSchema} from 'graphql/utilities';

// Assume your schema is in ../data/schema
import {schema} from '../data/schema';
const yourSchemaPath = path.join(__dirname, '../data/schema');

// Save JSON of full schema introspection for Babel Relay Plugin to use
graphql(schema, introspectionQuery).then(result => {
  fs.writeFileSync(
    `${yourSchemaPath}.json`,
    JSON.stringify(result, null, 2)
  );
});
*/

var fs = require('fs');
var path = require('path');
var Schema = require('../graphql/test.js'); // update this to the path of your schema.js
var {graphql} = require('graphql');
var {introspectionQuery} = require('graphql/utilities');

graphql(Schema, introspectionQuery)
.then((result) => {
  fs.writeFileSync(
    path.join(__dirname, '../graphql/schema.json'), // update this to your desired path
    JSON.stringify(result, null, 2)
  );
})
.catch((err) => {
  console.log(err);
});
