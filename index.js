const express = require('express')
const bodyParser = require('body-parser')

const { batches, users, essions,}

const PORT = process.env.PORT || 3030

let app = express()
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Hello from Express!')
})

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})
