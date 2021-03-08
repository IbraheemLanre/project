const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const biodataSchema = new Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true, min: 0 },
  date: { type: Date, default: Date.now },
});

// const BioData = mongoose.model("BioData", bioDataSchema);

// const newBioData = new BioData({
//     name:'Mr Naija D',
//     age: 40,
// })

// newBioData.save().then(()=>console.log("Added a new detail to db"))

module.exports = mongoose.model("Biodata", biodataSchema);
