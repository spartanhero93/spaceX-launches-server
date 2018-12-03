const express = require('express')
const graphqlHTTP = require('express-graphql')
const cors = require('cors')
const PORT = process.env.PORT || 9000

const schema = require('./schema')
const app = express()

app.use(cors())

app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
)

app.listen(PORT, () => console.log(`Browse to port localhost:${PORT}/graphql`))
