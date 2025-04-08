import { User } from "./models/user.js";

export const resolvers = {
  Query: {
    users: async () => await User.find(),
    user: async (_, { id }) => await User.findById(id),
  },
  Mutation: {
    createUser: async (_, { nom, prenom, email }) => {
      const user = new User({ nom, prenom, email });
      await user.save();
      return user;
    },
    updateUser: async (_, { id, nom, prenom, email }) => {
      const user = await User.findByIdAndUpdate(
        id,
        { nom, prenom, email },
        { new: true }
      );
      return user;
    },
    deleteUser: async (_, { id }) => {
      await User.findByIdAndDelete(id);
      return "Utilisateur supprimé avec succès.";
    },
  },
};
