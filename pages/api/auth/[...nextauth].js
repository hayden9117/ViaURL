import NextAuth from "next-auth/next";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "../../../lib/mongodb";
import addUser from "../Users/addUser";

export default NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],

  callbacks: {
    async redirect(url, baseUrl) {
      return "http://localhost:3000/";
    },
    async signIn({ user, account, profile, email, credentials }) {
      if (!user?.role) {
        user.role = "Client";
        user.banned = false;
      }
      if (!user?.links) {
        user.links = [];
      }
      if (!user?.avatarImg) {
        user.avatarImg = "";
      }
      if (!user?.avatarImgs) {
        user.avatarImgs = [user.image];
      }
      if (!user?.avatars) {
        user.avatars = 1;
      }
      if (!user?.background) {
        user.background = "#ff85ad";
      }
      if (!user?.opacity) {
        user.opacity = "ff";
      }
      if (!user?.template) {
        user.template = "column";
      }
      if (!user?.brightness) {
        user.brightness = 0;
      }
      if (!user?.colorList) {
        user.colorList = [];
      }
      if (!user?.gradient) {
        user.gradient = false;
      }
      if (!user?.hasPublished) {
        user.hasPublished = false;
      }
      return true;
    },
    async jwt(token, user, account, profile, isNewUser) {
      if (account?.accessToken) {
        token.accessToken = account.accessToken;
      }
      if (user?.role) {
        token.role = user.role;
      }
      if (user?.banned) {
        token.banned = user.banned;
      }
      if (user?.links) {
        token.links = [];
      }
      if (user?.avatarImg) {
        token.avatarImg = "";
      }
      if (user?.avatarImgs) {
        token.avatarImgs = [user.image];
      }
      if (user?.avatars) {
        token.avatars = 1;
      }
      if (user?.background) {
        token.background = "#ff85ad";
      }
      if (user?.opacity) {
        token.opacity = "ff";
      }
      if (user?.template) {
        token.template = "column";
      }
      if (user?.brightness) {
        token.brightness = 0;
      }
      if (user?.colorList) {
        token.colorList = [];
      }
      if (user?.gradient) {
        token.gradient = false;
      }
      if (user?.hasPublished) {
        token.hasPublished = false;
      }
      return token;
    },
    async session(session, token) {
      if (token?.accessToken) {
        session.accessToken = token.accessToken;
      }
      if (token?.role) {
        session.user.role = token.role;
      }
      if (token?.banned) {
        session.banned = user.banned;
      }
      if (token?.links) {
        session.links = [];
      }
      if (token?.avatarImg) {
        session.avatarImg = "";
      }
      if (token?.avatarImgs) {
        session.avatarImgs = [token.image];
      }
      if (token?.avatars) {
        session.avatars = 1;
      }
      if (token?.background) {
        session.background = "#ff85ad";
      }
      if (token?.opacity) {
        session.opacity = "ff";
      }
      if (token?.template) {
        session.template = "column";
      }
      if (token?.brightness) {
        session.brightness = 0;
      }
      if (token?.colorList) {
        session.colorList = [];
      }
      if (token?.gradient) {
        session.gradient = false;
      }
      if (token?.hasPublished) {
        session.hasPublished = false;
      }
      return session;
    },
  },
  adapter: MongoDBAdapter(clientPromise),
  database: process.env.MONGODB_URI,
  session: {
    jwt: true,
  },
  pages: {
    signIn: "/signin",
    newUser: "/Welcome",
  },
});
