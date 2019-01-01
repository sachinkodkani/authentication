import { UserModel } from "../../models/user";

export const typeDef = `
    
    extend type Query {
        user(userName : String!) : User
        users : [User]
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
    
    user: async function(root, { userName }) {
      return await UserModel.findOne({ userName: userName });
    },

    users: async function() {
      return await UserModel.find();
    }
  }
};

/*export const resolvers = {
  Query: {
    user: async function(root, { id }) {
      return await UserModel.findById(id);
    }
  }
};*/
