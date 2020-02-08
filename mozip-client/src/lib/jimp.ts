import *as JIMP from 'jimp';

export const convertToJimpObject = (base64: string) => {
  return new Promise((resolve, reject) => {
    JIMP.read(base64, (err, data) => {
      if (err) reject(err);
      else resolve(data);
    });
  });
};

const getMimeType = (jimp_obj: any) => jimp_obj.getMIME();

export const getBufferFromJimp = (jimp_obj: any) => {
  const mime = getMimeType(jimp_obj);
  let buffer;
  jimp_obj.getBuffer(mime, (err: any | Error, data:Buffer) => {
    if(err) return console.log(err)
    buffer = data;
  });
  if (buffer) return buffer;
};

export const getBase64fromJimp = (jimp_obj: any) => {
  const mime = getMimeType(jimp_obj);
  let base64;
  jimp_obj.getBase64(mime, (err: any | Error, data: string) => {
    base64 = data;
  });
  if (base64) return base64;
};

export const imageResize = (jimp_obj: any, width: number, height: number) => {
  return new Promise(resolve => {
    const width = jimp_obj.bitmap.width; //origin image width
    const height = jimp_obj.bitmap.height;
    jimp_obj
      .resize(width, height)
      .quality(60); //JPEG quality
    // .greyscale() //grey effect
    resolve(jimp_obj);
  });
};
