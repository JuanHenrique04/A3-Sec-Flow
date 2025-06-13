import { PrismaClient } from '../src/generated/prisma/client'

const prisma = new PrismaClient()

export default prisma
// use `prisma` in your application to read and write data in your DB