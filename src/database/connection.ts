import  * as mongoDB from 'mongodb';

const MONGODB_CONNECTION =
  "";

const client: mongoDB.MongoClient = new mongoDB.MongoClient(MONGODB_CONNECTION);
           
await client.connect();
