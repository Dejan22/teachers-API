const request = require('superagent')

const createURL = (path) => {
  return `${process.env.HOST || `http://localhost:${process.env.PORT || 3030}`}${path}`
}

const createBatches = (token) => {
  return batches.map
}
