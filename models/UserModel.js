import mongoose from 'mongoose';
const { Schema } = mongoose;
import { ObjectId } from Schema.Types.ObjectId;

const UserSchema = new Schema({
    username: String,
    email: String,
    password: String,
    joinedAt: { type: Date, default: Date.now },
});

const UserModel = mongoose.model('User', UserSchema);

return UserModel;