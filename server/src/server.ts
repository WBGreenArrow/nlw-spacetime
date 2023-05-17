import fastify from 'fastify'

const app = fastify()

app.get('/', (request, response) => {
  response.send({ hello: 'world' })
})

app
  .listen({
    port: 3000,
  })
  .then(() => {
    console.log('Server listening on port 3000')
  })
