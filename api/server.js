const jsonServer = require('json-server')

const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)

// Reescrita para usar /api
server.use(
  jsonServer.rewriter({
    '/api/*': '/$1',
  })
)

server.use(router)

const PORT = 3000
server.listen(PORT, () => {
  console.log(`JSON Server running on http://localhost:${PORT}`)
})
