export interface Jobs extends Document {
  _id: string;
  minSalary: number;
  maxSalary: number;
  currency: string;
  salaryFrequency: string;
  recruiterName: string;
  recruitAmount: number;
  jobName: string;
  jobType: string;
  gender: string;
  minAge: number;
  maxAge: number;
  englishLevel: string;
  experience: string;
  otherRequirements: string;
  contactInfo: string;
  region: string;
  workAddress: string;
  careerId: string;
  careerDetailId: string;
  image: {
    secureURL: string;
    publicId: string;
  };
}
