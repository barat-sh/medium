import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
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
