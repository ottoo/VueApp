const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

if (process.env.NODE_ENV !== 'test') {
  const authSource = process.env.MONGODB_AUTH_DB || process.env.MONGODB_DATABASE;
  const uri = `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.MONGODB_DATABASE}?authSource=${authSource}`;

  mongoose.connect(uri, {
    useMongoClient: true,
    poolSize: 5,
    socketTimeoutMS: 0,
    keepAlive: true,
    reconnectInterval: 1000,
    reconnectTries: Number.MAX_VALUE,
    user: process.env.MONGODB_USERNAME,
    pass: process.env.MONGODB_PASSWORD
  }).then(() => {
    console.log('-- mongodb connection open --');
  });
}
