const express = require('express')
const bodyParser = require('body-parser')

const { batches, users, essions,}

const PORT = process.env.PORT || 3030

let app = express()
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json())

app.use(( req,res,next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})

app.use((err, req, res, next) =>{
  res.status(err.status || 500)
  res.json({
    error: app.get('env') === 'development' ? err : {}
  })
})

app.get('/', (req, res) => {
  res.send('Hello from Express!')
})



app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})
