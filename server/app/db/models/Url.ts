import mongoose from 'mongoose';

const urlSchema = new mongoose.Schema({
  url: { type: String },
  shortened: { type: String, unique: true },
});

const Url = mongoose.model('Url', urlSchema);

export default Url;
