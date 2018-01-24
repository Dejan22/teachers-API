const passport = require('../config/auth')

router.get('/students', (req, res, next) => {
  Student.find()

    .sort({ createdAt: -1 })

    .then((students) => res.json(students))
    
    .catch((error) => next(error))
  })
  .get('/students/:id', (req, res, next) => {
    const id = req.params.id
    Student.findById(id)
      .then((student) => {
        if (!student) { return next() }
        res.json(student)
      })
      .catch((error) => next(error))
  })
  .post('/students',
    passport.authorize('jwt', { session: false }),
    (req, res, next) => {
      let newStudent = req.body
      newStudent.authorId = req.account._id

      Student.create(newStudent)
        .then((student) => res.json(student))
        .catch((error) => next(error))
    })
  .put('/students/:id', (req, res, next) => {
    const id = req.params.id
    Student.findById(id)
      .then((student) => {
        if (!student) { return next() }

        const newData = req.body

        student.update(newData)
          .then((updatedStudent) => {
            res.json(updatedStudent)
          })
          .catch((error) => next(error))
      })
      .catch((error) => next(error))
  })

module.exports = router
