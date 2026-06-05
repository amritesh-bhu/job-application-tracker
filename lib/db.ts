import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI
console.log(MONGO_URI)
if (!MONGO_URI) {
    throw new Error("MONGO_URI is not defined!")
}

interface MongooseCache {
    conn: typeof mongoose | null;
    promise: Promise<typeof mongoose> | null
}

declare global {
    var mongooseCache: MongooseCache;

}
let cached = global.mongooseCache

if (!cached) {
    cached = global.mongooseCache = { conn: null, promise: null }
}

export const dbConn = async () => {
    if (cached.conn) {
        return cached.conn
    }

    if (!cached.promise) {
        const opts = {
            bufferCommands: false,
        }
        cached.promise = mongoose.connect(MONGO_URI, opts).then((mongooseInstance) => {
            console.log("mongodb connected")
            return mongooseInstance
        })
    }

    try {
        cached.conn = await cached.promise
    } catch (error) {
        cached.promise = null
        throw error
    }

    return cached.conn
}