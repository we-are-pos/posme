import S3FileUpload from 'react-s3';
 
//Optional Import
import { uploadFile } from 'react-s3';
 
const config = {
    bucketName: 'myBucket',
    dirName: 'photos', /* optional */
    region: 'eu-west-1',
    accessKeyId: 'ANEIFNENI4324N2NIEXAMPLE',
    secretAccessKey: 'cms21uMxçduyUxYjeg20+DEkgDxe6veFosBT7eUgEXAMPLE',
}
 
/*  Notice that if you don't provide a dirName, the file will be automatically uploaded to the root of your bucket */
 export function uploadPhoto(file) {
S3FileUpload
    .uploadFile(file, config)
    .then(data => console.log(data))
    .catch(err => console.error(err))
} 
//** OR *//
 
 export function uploadAnotherPhoto(file) {
uploadFile(file, config)
    .then(data => console.log(data))
    .catch(err => console.error(err))
});
}