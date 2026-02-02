import imageCompression from 'browser-image-compression';

/*Compresses an image by url */
export async function compressImage(url){
    try{
        const response = await fetch(url);
        const blob = await response.blob();

        const compressedBlob = await imageCompression(blob,{
            maxSizeMB: 0.3, //~300 KB
            initialQuality: 0.55, // faster compression
            maxWidthOrHeight: 1600,
            useWebWorker: true, //makes the images run in the "background"
        });
    
    return URL.createObjectURL(compressedBlob);
    }
    catch (error){
        console.error("Image compression failed");
        return url;
    }
}
// import imageCompression from 'browser-image-compression';

// const compressedCache = new Map();

// /* Compresses an image by url — NON blocking */
// export async function compressImage(url) {
//   // Cache result so we never recompress
//   if (compressedCache.has(url)) {
//     return compressedCache.get(url);
//   }

//   try {
//     const response = await fetch(url);
//     const blob = await response.blob();

//     // Skip compression if already small
//     if (blob.size < 300 * 1024) {
//       compressedCache.set(url, url);
//       return url;
//     }

//     // Defer compression so page can render first
//     await new Promise(requestIdleCallback);

//     const compressedBlob = await imageCompression(blob, {
//       maxSizeMB: 0.3,
//       initialQuality: 0.7,
//       maxWidthOrHeight: 1920,
//       useWebWorker: true,
//     });

//     if (compressedBlob.size >= blob.size) {
//       compressedCache.set(url, url);
//       return url;
//     }

//     const objectUrl = URL.createObjectURL(compressedBlob);
//     compressedCache.set(url, objectUrl);
//     return objectUrl;

//   } catch (err) {
//     console.error('Image compression failed:', err);
//     return url;
//   }
// }

