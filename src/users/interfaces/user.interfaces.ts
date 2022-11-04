export interface User extends Document {
  _id: string;
  name: string;
  email: string;
  password: string;
  role: string;
  uuid: string;
  avatar: {
    secureURL: string;
    publicId: string;
  };
  birthday: string;
  phonenumber: string;
  permission: string[];
  gender: string;
  currentHashedRefreshToken: string;
  verification: {
    code: string;
    timeOut: number;
  };
}
