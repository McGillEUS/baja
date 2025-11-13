<script setup>
import imageCompression from 'browser-image-compression';

/*Compresses an image by url */
async function compressImage(url){
    try{
        const response = await fetch(url);
        const blob = await response.blob();

        const compressedBlob = await imageCompression(blob,{
            maxSizeMB: 0.3, //~300 KB
            useWebWorker: true, //makes the images run in the "background"
        });
    
    return URL.createObjectURL(compressedBlob);
    }
    catch (error){
        console.error("Image compression failed");
        return url;
    }
}

</script>