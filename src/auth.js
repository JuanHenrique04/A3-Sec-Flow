import { PrismaAdapter } from "@next-auth/prisma-adapter"
import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import prisma from "../prisma/db"
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  // adapter: PrismaAdapter(prisma),
  providers: [GitHub],
})
