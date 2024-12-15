import { authOptions } from "@/lib/auth";
import NextAuth from "next-auth";

export default NextAuth(authOptions);

console.log("ENV VARIABLES", {
    GITHUB_ID: process.env.GITHUB_ID,
    GITHUB_SECRET: process.env.GITHUB_SECRET,
  });