import express from 'express'

const server = express()

server.get('/', (request, response) => {
  return response.send('Hello!')
})

server.listen(3000, () => {
  console.log('server running')
})
