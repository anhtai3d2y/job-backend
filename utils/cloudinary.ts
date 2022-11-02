import { v2 as cloudinary } from 'cloudinary';

// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

cloudinary.config({
  cloud_name: 'anhtai3d2y',
  api_key: '359976413588993',
  api_secret: 'Mwzj54t_WYfKtVWfutJuaD5yYW8',
});

export const uploadFile = async (fileName) => {
  try {
    const result = await cloudinary.uploader.upload(fileName);
    return result;
  } catch (error) {
    return error;
  }
};

export const deleteFile = async (publicId) => {
  return await cloudinary.uploader.destroy(publicId);
};
