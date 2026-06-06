import { dbConn } from "./db"
import { Board, Column } from "./model"

const DEFAULT_COLUMN = [
    {
        name: "Wish List",
        order: 0,
    },
    { name: "Applied", order: 1 },
    { name: "Interviewing", order: 2 },
    { name: "Offer", order: 3 },
    { name: "Rejected", order: 4 },
]

export const initializeUserBoard = async (userId: string) => {

    await dbConn()

    const existingBoard = await Board.findOne({ userId, name: "Job Hunt" })
    if (existingBoard) {
        return existingBoard
    }

    const board = await Board.create({
        name: "Job Hunt",
        userId,
        column: [],
    })

    const columns = await Promise.all(
        DEFAULT_COLUMN.map((col) =>
            Column.create({
                name: col.name,
                order: col.order,
                boardId: board._id,
                jobApplication: []
            })
        )
    )

    const cols = columns.map((col) => col._id)

    const newBoard = await Board.updateOne({ _id: board._id }, { column: cols })
    return newBoard
}