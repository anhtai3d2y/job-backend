import * as mongoose from 'mongoose';
export const recruitersSchema = new mongoose.Schema(
  {
    userId: String,
    name: String,
    career: String,
    image: {
      secureURL: String,
      publicId: String,
    },
    description: String,
  },
  { timestamps: true, versionKey: false },
);
