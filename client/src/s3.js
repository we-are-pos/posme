import S3FileUpload from "react-s3";

//Optional Import
import { uploadFile } from "react-s3";

const config = {
  bucketName: S3_BUCKET_NAME,
  dirName: "photos" /* optional */,
  region: "us-west-1",
  accessKeyId: AWS_ACCESS_KEY_ID,
  secretAccessKey: AWS_SECRET_ACCESS_KEY
};

/*  Notice that if you don't provide a dirName, the file will be automatically uploaded to the root of your bucket */
export function uploadPhoto(file) {
  S3FileUpload.uploadFile(file, config)
    .then(data => console.log(data))
    .catch(err => console.error(err));
}
//** OR *//

export function uploadAnotherPhoto(file) {
  uploadFile(file, config)
    .then(data => console.log(data))
    .catch(err => console.error(err));
}
