import { UserModel } from "../../models/user";

export const typeDef = `
    
    extend type Query {
        user(userName : String!) : User
        users : [User]
    }

    type User {
        userName : String!
        password : String!
        email : String!
        firstName : String
        lastName : String
        avatar : String 
        level : String
        isActive : Boolean
    }

`;

export const resolvers = {
  Query: {
    
    user: async function(root, { userName }) {
      return await UserModel.findOne({ userName: userName });
    },

    users: async function() {
      return await UserModel.find();
    }
  }
};
