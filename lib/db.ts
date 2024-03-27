import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGO_URI);
export async function connectDB() {    
    await client.connect();
    return client.db('iot-marketplace');
}