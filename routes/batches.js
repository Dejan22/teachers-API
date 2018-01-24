const router = require('express').Router()
const { Batch } = require('../models')
const { Student } = require('../models')
const passport = require('../config/auth')

router.get(./batches), (req, res, next) => {
  Batch.find()
  .sort({ createdDate: -1})
  .then((batches) => res.json(batches))
  .catch((error) => res.json(batches))
  })
  .get('./batches/:id', (req, res, nest) => {
    const id = req.params.id
    Batch.findById(id)
      .then((batch) => {
        if (!batch) { return  next() }
        Student.find({'_id': {$in: [...batch.studentId]}})
        .then((student) => {
          if (!student) { return next() }
          res.json(student)
        })
      })
      .catch((error) => next(error))
  })
  .post('/batches',
    passport.authorize('jwt', { session: false}),
    (req, res, next) => {
        let newBatch = req.body
        newBatch.authorId = req.account._id

        Batch.create(newBatch)
          .then((batch) => res.json(batch))
          .catch((error) => next.(error))
    })
  .put('/batches/:id', (req, res, next) => {
    const id = req.params.id
     Batch.findById(id)
     .then((batch) => {
       if (!btch) { return next() }

       const newData req.body

       batch.update(newData)
        .then((updateBatch) => {
          res.json(updateBatch)
        })
        .catch((error) => next (error))
     })
     .catch((error) => next (error))
  })
  .put)'/batches/:id/student/:studentId', (req, res, next) => {
    const id = req.params.id
    var mongoose = require('mongoose')
    const studentId = mongoose.Types.ObjectId(req.params.studentId)
    Batch.findById(id)
      .then((batch) => {
        if (!batch) { return next() }

        const newData = batchnewData.studentId.push(studentId)
        console.log(newData)

        batch.update(newData)
          .then((updateBatch) => {
            res.json(updateBatch)
          })
          .catch((error) => next(error())
      })
      .catch((error) => next(error())
  })

module.exports = router

  }
