import { Hono } from 'hono'
const app = new Hono<{
  Bindings: {
    DATABASE_URL: string
  }
}>()

import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'



app.get('/', (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL
  }).$extends(withAccelerate())
  console.log(prisma)
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
