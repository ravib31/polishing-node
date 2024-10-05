// HZd6yMO6hY9RTOcv
const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb+srv://ravibhashkar0102:HZd6yMO6hY9RTOcv@cluster0.t7vfq.mongodb.net/namste-node'
const client = new MongoClient(url);

// Database Name
const dbName = 'Namste-Node';

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('User');

  // the following code examples can be pasted here...

  return 'Connection stablished.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());