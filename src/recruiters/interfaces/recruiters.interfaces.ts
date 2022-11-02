export interface Recruiters extends Document {
  _id: string;
  uuid: string;
  name: string;
  career: string;
  image: {
    secureURL: string;
    publicId: string;
  };
  description: string;
}
