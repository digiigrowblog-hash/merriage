import { defineConfig }  from '@prisma/config';

module.exports = defineConfig({
  datasource: {
    url: process.env.DATABASE_URL,
  },
})

