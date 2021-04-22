const mongoose = require('mongoose');

//moogoose give structure where mongodb doesnt
const Schema = mongoose.Schema;

//created the publisher js model
// normalize Cause it uses a reference
const Publisher = new Schema(
  {
    name: { type: String, required: true },
    location: { type: String, required: true },
    url: {type: String, required: true},
  },
  {timestamps: true},
);

module.exports = mongoose.model('publishers', Publisher);
