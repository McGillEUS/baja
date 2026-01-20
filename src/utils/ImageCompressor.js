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
