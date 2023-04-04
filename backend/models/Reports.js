const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);
const reportSchema = new mongoose.Schema({
    police_id: {
      type: Number,
      ref: 'Police',
    },
    hospital_id: {
      type: String,
      ref: 'Hospital',
    },
    reporter_id: {
      type: String,
      ref: 'Reporter',
      required: true
    },
    reportId: {
      type: Number,
      unique: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    location: {
        type: [Number],
        required: true
    },
    severity: {
      type: String,
      enum: ['high', 'medium', 'low'],
      required: true
    },
    status: {
      type: String,
      enum: ['open', 'accepted_hospital', 'rejected', "accepted_police"],
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now, 
      required: true
    }
  });

reportSchema.plugin(AutoIncrement, {inc_field: 'reportId'});
const Report = mongoose.model('report', reportSchema);

module.exports = Report;
