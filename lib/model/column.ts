import mongoose, { Document, Schema } from "mongoose";

export interface IColumn extends Document {
    name: string,
    boardId: mongoose.Types.ObjectId,
    order: number,
    jobApplication: mongoose.Types.ObjectId[],
    createdAt: Date,
    updatedAt: Date
}

const columnSchema = new Schema<IColumn>({
    name: {
        type: String,
        required: true
    },
    boardId: {
        type: mongoose.Types.ObjectId,
        ref: "board",
        required: true,
        index: true
    },
    jobApplication: [
        {
            type: mongoose.Types.ObjectId,
            ref: "jobApplication"
        }
    ]
},
    {
        timestamps: true
    }
)

export default mongoose.models.column || mongoose.model<IColumn>("column", columnSchema);
