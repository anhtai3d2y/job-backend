import * as mongoose from 'mongoose';
export const applicationsSchema = new mongoose.Schema(
  {
    uuid: String,
    jobId: String,
    status: String,
  },
  { timestamps: true, versionKey: false },
);
