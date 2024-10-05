// HZd6yMO6hY9RTOcv
const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'


// Connection URL
const url = 'mongodb+srv://ravibhashkar0102:HZd6yMO6hY9RTOcv@cluster0.t7vfq.mongodb.net/'
const client = new MongoClient(url);

// Database Name
const dbName = 'namste-node';

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('user');

  // the following code examples can be pasted here...



// const data = {
//     "name":"sam",
//     "location":"orisha",
//     "occupation":"Developer"
// }

// const insertResult = await collection.insertMany([data]);
// console.log('Inserted documents =>', insertResult);



  const findResult = await collection.find({}).toArray();
console.log('Found documents =>', findResult);

  return 'Connection stablished.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());