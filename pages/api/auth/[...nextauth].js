import NextAuth from "next-auth/next";
import GitHubProvider from "next-auth/providers/github";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import { connectToDatabase } from "../../../util/mongodb";

export default NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  // adapter: MongoDBAdapter(connectToDatabase),
  database: process.env.MONGODB_URI,
  session: {
    jwt: true,
  },
  pages: {
    signIn: "/signin",
  },
});
