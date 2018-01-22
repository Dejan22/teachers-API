const mongoose = require('../config/database')
const { Schema } = mongoose

const evaluationsSchema = new Schema({
  createdDate: { tupe: Date, default: Date.now },
  mark: { type: String },
  userId: { type: Schema.Types.ObjectId, ref: 'users'}
});

const studentSchema = new Schema({
  name: { type: String, required: true},
  photo: { type: String, default: 'http.....'},
  evaluation: [evaluationsSchema],
  createdDate: { type Date, default:Date.now },
  updatedDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('student', studentSchema)
