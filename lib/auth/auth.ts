import { betterAuth } from "better-auth"
import { MongoClient } from "mongodb"
import { mongodbAdapter } from "better-auth/adapters/mongodb"
import { initializeUserBoard } from "../init-user-board";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

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
    },
    databaseHooks: {
        user: {
            create: {
                after: async (user) => {
                    if (user.id) {
                        await initializeUserBoard(user.id)
                    }
                }
            }
        }
    }
})


export async function getSession() {
    const result = await auth.api.getSession({
        headers: await headers()
    })

    return result
}

export async function signOut() {
    const result = await auth.api.signOut({
        headers: await headers()
    })

    if (result.success) {
        redirect("/sign-in")
    }
}

