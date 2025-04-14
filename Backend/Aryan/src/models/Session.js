const mongoose = require("mongoose");

const SessionSchema = new mongoose.Schema({
  class_id: { type: mongoose.Schema.Types.ObjectId, ref: "Class", required: true },
  stud_id: { type: mongoose.Schema.Types.ObjectId, ref: "Student", required: true },
  tab_join_times: [{ type: Date }], // Array of join times
  tab_leave_times: [{ type: Date }], // Array of leave times
});

module.exports = mongoose.model("Session", SessionSchema);