import mongoose from 'mongoose';
const { Schema } = mongoose;
import { ObjectId } from Schema.Types.ObjectId;

const binSchema = new Schema({
    authorName: String,
    authorAccount: ObjectId,
    body:   String,
    comments: [{ body: String, date: Date }],
    date: { type: Date, default: Date.now },
    hidden: Boolean,
    meta: {
      votes: Number,
    }
});

const binModel = mongoose.model('Bin', binSchema);

return binModel;