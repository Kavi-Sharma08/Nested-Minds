const mongoose = require("mongoose");

const EngagementDataSchema = new mongoose.Schema({
  class_id: { type: mongoose.Schema.Types.ObjectId, ref: "Class", required: true },
  stud_id: { type: mongoose.Schema.Types.ObjectId, ref: "Student", required: true },
  session: { type: mongoose.Schema.Types.ObjectId, ref: "Session" },
  is_present_flag: { type: Boolean, default: false },
  mouse_move: { type: Boolean, default: false },
});

module.exports = mongoose.model("EngagementData", EngagementDataSchema);