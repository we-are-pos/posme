import S3FileUpload from "react-s3";

//Optional Import
import { uploadFile } from "react-s3";

const config = {
  bucketName: "posme",
  dirName: "photos" /* optional */,
  region: "us-west-1",
  accessKeyId: "AKIAYLM5PHY6APZYQQEF",
  secretAccessKey: "ZCZ9ibGF8QS80uC2xzDxhDTe5L/31lDemwBoFZVy"
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
