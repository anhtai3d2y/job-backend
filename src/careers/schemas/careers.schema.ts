import * as mongoose from 'mongoose';
export const careersSchema = new mongoose.Schema(
  {
    name: String,
  },
  { timestamps: true, versionKey: false },
);
