import { betterAuth } from "better-auth"
import { MongoClient } from "mongodb"
import { mongodbAdapter } from "better-auth/adapters/mongodb"

if (!process.env.MONGO_URI) {
    throw new Error("Next.js cannot find MONGO_URI. Check your file placement and restart npm run dev.");
}

const client = new MongoClient(process.env.MONGO_URI!)
const db = client.db()

export const auth = betterAuth({
    database: mongodbAdapter(db, {
        client,
    }),
    emailAndPassword: {
        enabled: true
    }
})