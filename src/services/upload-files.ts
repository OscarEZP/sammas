import { Injectable } from '@nestjs/common';
import { Storage } from '@google-cloud/storage';
import * as path from 'path';
import { createReadStream } from 'fs';

@Injectable()
export class UploadFileService {
  gc = new Storage({
    keyFilename: path.join(__dirname, '../../google-serviceaccount.json'),
    projectId: 'sammas',
  });

  getBuckets() {
    this.gc.getBuckets().then((x) => {
      console.log(x);
    });
  }

  uploadDocument(file, CLOUD_BUCKET: string): Promise<any> {
    const documentsBucket = this.gc.bucket(CLOUD_BUCKET);
    return new Promise((res, reject) => {
      createReadStream(file.path)
        .pipe(
          documentsBucket.file(file.filename).createWriteStream({
            resumable: false,
            gzip: true,
          }),
        )
        .on('finish', () => {
          res({
            success: true,
            fileUrl: `https://storage.googleapis.com/${CLOUD_BUCKET}/${file.filename}`,
          });
        });
    });
  }
}
