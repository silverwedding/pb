import mongoose from 'mongoose';

mongoose
  .connect('mongodb://localhost:27017/pb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch((e) => console.error(e));

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('connected');
});
