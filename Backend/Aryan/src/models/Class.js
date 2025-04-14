const mongoose = require("mongoose");

const ClassSchema = new mongoose.Schema({
  teach_id: { type: mongoose.Schema.Types.ObjectId, ref: "Teacher", required: true },
  students_array: [{ type: mongoose.Schema.Types.ObjectId, ref: "Student" }], // References to Student IDs
  collection: { type: String, default: "studEngagementData" },
  start_time: { type: Date, required: true },
  end_time: { type: Date, required: true },
});

module.exports = mongoose.model("Class", ClassSchema);