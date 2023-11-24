import { connectDB } from "@/util/database";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: '518df1327f254d7bf700',
      clientSecret: 'aec91dd82f8405a566714118b75da7fc7b59a0c4',
    }),
  ],
  secret : 'jwjb1020',
  adapter : MongoDBAdapter(connectDB)
};
export default NextAuth(authOptions); 