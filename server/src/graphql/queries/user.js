import {UserModel} from '../../models/user';

export const typeDef = `
    
    extend type Query {
        user(userName : String!)   
    }

    type User {
        userName : String!
        email : String!
        firstName : String
        lastName : String
        avatar : String 
        isAdmin : Boolean
        isActive : Boolean
    }

`;

export const resolvers = {
    Query: {
      user: function(root, { userName }) {
        UserModel.find({ userName: userName }, function(err, user) {
          if (err) return console.error(err);
          return user;
        });
      }
    }
  };
