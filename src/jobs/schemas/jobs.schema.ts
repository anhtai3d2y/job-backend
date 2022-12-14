import * as mongoose from 'mongoose';
export const jobsSchema = new mongoose.Schema(
  {
    minSalary: Number,
    maxSalary: Number,
    currency: String,
    salaryFrequency: String,
    recruiterName: String,
    recruitAmount: Number,
    jobName: String,
    jobType: String,
    gender: String,
    minAge: Number,
    maxAge: Number,
    englishLevel: String,
    experience: String,
    otherRequirements: String,
    contactInfo: String,
    region: String,
    workAddress: String,
    careerId: String,
    careerDetailId: String,
    image: {
      secureURL: String,
      publicId: String,
    },
  },
  { timestamps: true, versionKey: false },
);
