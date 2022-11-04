import * as mongoose from 'mongoose';
export const certificatesSchema = new mongoose.Schema(
  {
    image: String,
    content: String,
    profileId: String,
  },
  { timestamps: true, versionKey: false },
);
