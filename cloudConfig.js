const cloudinary = require("cloudinary").v2;
require('dotenv').config();
const {CloudinaryStorage} = require("multer-storage-cloudinary")

cloudinary.config({ 
  cloud_name: "dx7qcikcu", 
  api_key: "355514494182223", 
  api_secret: "gU8VfiZXgPPbtA0EezME-IxLP0s"
});



const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
      folder: 'Wanderlust_DEV',
      allowFormats:["png", "jpeg", "jpg"]
    },
  });

  module.exports= {
    cloudinary,
    storage
  }