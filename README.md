Graphql API with Apollo Server TypeORM and Typescript

commands used to create this project:

> npm init -y

Install this depedencies to the project:

> npm install apollo-server type-graphql typeorm reflect-metadata

Here we are installing:

Apollo Server to build and run our GraphQL server
TypeGraphQL to generate our schema from TypeScript classes
TypeORM to interact with our SQL database
reflect-metadata to work with TypeScript decorators

then we need to install this dependencies 

This script will install:

TypeScript to compile our code to plain JavaScript
ts-node to run our server in development environment
nodemon to automatically restart the server whenever we make changes to the code

> npm install -D typescript ts-node nodemon

To use Mysql or PsSQl Database Engine on the project we need to install the driver for Node.js using this command:

> npm install psql