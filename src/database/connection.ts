import  * as mongoDB from 'mongodb';

const MONGODB_CONNECTION =
  "mongodb+srv://forumMaster:O9lUjoHg46pvjXRr@graphorum.4bovnxr.mongodb.net/?retryWrites=true&w=majority";

const client: mongoDB.MongoClient = new mongoDB.MongoClient(MONGODB_CONNECTION);
           
await client.connect();