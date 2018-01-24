const mongoose = require('../config/database')
const { Schema } = mongoose
const students = require('./student').schema

const batchSchema = new Schema({
  studentId: [{ type: Schema.Type.ObjectId, fer:'students'}]
  batch: { type: String, required: true },
  startingDate: { type: Date, default: Date.now, required: true},
  endingDate: { type: Date, required: true},
  createdAt: { type: Date, default: Date.now},
  updatedAt: { type: Date, defaultL Date.now}
})

module.exports= mongoose.model('batch', batchSchema)
