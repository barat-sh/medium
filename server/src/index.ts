import { Hono } from 'hono'
const app = new Hono<{
  Bindings: {
    DATABASE_URL: string
  }
}>()

import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'

const DB_Connect =async (c:any) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL
  }).$extends(withAccelerate())
  console.log("Connected to prisma...!")
  return prisma
}

app.get('/', async(c) => {
  const Prisma = await DB_Connect(c)
  return c.text('Hello Hono!')
})


app.post('/api/login', (c) => {
  return c.text('Hello Hono!')
})


app.get('/api/signup', (c) => {
  return c.text('Hello Hono!')
})


app.get('/api/blog/:id', (c) => {
  return c.text('Hello Hono!')
})

export default app
