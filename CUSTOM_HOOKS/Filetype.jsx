import { useState, useEffect } from 'react';


export const UrlTypeofvideo = (url) => {
console.log("1234567",url)
  const [urlType, setUrlType] = useState(null);
  const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.svg'];
  const videoExtensions = ['.mp4', '.webm', '.ogg', '.avi', '.mov'];

  useEffect(() => {
    const checkUrlType = async () => {
        const urlLowerCase = url.toLowerCase();
       
      const isImage = imageExtensions.some((ext) => urlLowerCase.endsWith(`${ext}`))
      const isVideo = videoExtensions.some((ext) => urlLowerCase.endsWith(`${ext}`))
      try {
        if (isImage) {
           setUrlType('image');
          } else if (isVideo) {
           
            setUrlType('video');
          } else {
            setUrlType(null);
          }
      } catch (error) {
        console.error('Error checking URL type:', error);
        setUrlType(null);
      }
    };

    if (url) {
      checkUrlType();
    }

  }, [url]);

  return urlType;
};


