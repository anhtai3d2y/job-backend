import * as mongoose from 'mongoose';
export const careerDetailsSchema = new mongoose.Schema(
  {
    careerId: String,
    name: String,
  },
  { timestamps: true, versionKey: false },
);
