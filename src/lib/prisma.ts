// import { PrismaClient } from '../../generated/prisma/client'
// import { Pool } from 'pg'
// import { PrismaPg } from '@prisma/adapter-pg'

// declare global {
//   var prisma: PrismaClient | undefined
// }

// const dbUrl = process.env.DATABASE_URL
// if (!dbUrl) {
//   throw new Error('DATABASE_URL is not set')
// }

// const pool = new Pool({ connectionString: dbUrl })
// const adapter = new PrismaPg(pool)

// export const prisma = global.prisma ?? new PrismaClient({ adapter })

// if (process.env.NODE_ENV !== 'production') global.prisma = prisma


import { PrismaClient } from '../../generated/prisma'

declare global {
  var prisma: PrismaClient | undefined
}

export const prisma = global.prisma ?? new PrismaClient()

if (process.env.NODE_ENV !== 'production') global.prisma = prisma
