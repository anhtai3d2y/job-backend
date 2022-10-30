import * as mongoose from 'mongoose';
export const saveJobsSchema = new mongoose.Schema(
  {
    uuid: String,
    jobId: String,
  },
  { timestamps: true, versionKey: false },
);
