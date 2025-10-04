require('dotenv').config();
const mongoose = require('mongoose');

console.log('Testing MongoDB connection...');
console.log('MONGO_URI:', process.env.MONGO_URI ? 'Set' : 'NOT SET');
console.log('NODE_ENV:', process.env.NODE_ENV);

const uri = process.env.MONGO_URI;

if (!uri) {
  console.error('MONGO_URI environment variable is not set!');
  process.exit(1);
}

console.log('Attempting to connect to:', uri.replace(/\/\/[^:]+:[^@]+@/, '//***:***@'));

mongoose.set('strictQuery', false);

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('✅ MongoDB connection successful!');
    process.exit(0);
  })
  .catch((err) => {
    console.error('❌ MongoDB connection failed:', err.message);
    process.exit(1);
  });