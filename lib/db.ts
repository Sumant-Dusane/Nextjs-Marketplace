import { MongoClient } from "mongodb";

const MONGO_URI = 'mongodb+srv://sumant-dusane:sumant123456@sumant-dusane.3donyvz.mongodb.net/?retryWrites=true&w=majority'
const client = new MongoClient(MONGO_URI);

export async function connectDB() {
    await client.connect();
    return client.db('iot-marketplace');
}