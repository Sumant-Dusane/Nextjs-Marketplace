import { GridFSBucket, MongoClient } from "mongodb";

let cacheClient:any = null;
let cacheDB:any = null;

export async function connectDB() {    
    if(cacheClient) {
        return {
            client: cacheClient,
            db: cacheDB,
        }
    } 

    const client = new MongoClient(process.env.MONGO_URI);
    await client.connect();
    const db = client.db('iot-marketplace');

    cacheClient = client;
    cacheDB = db;

    return {client, db};
}