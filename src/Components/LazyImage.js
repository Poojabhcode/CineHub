// import React, { useState, useEffect } from 'react';

// const LazyImage = ({ src, alt, className }) => {
//   const [imageSrc, setImageSrc] = useState(null);

//   useEffect(() => {
//     const img = new Image();
//     img.src = src;

//     img.onload = () => {
//       setImageSrc(src);
//     };

//     return () => {
//       img.onload = null; // cleanup
//     };
//   }, [src]);

//   return <img src={imageSrc} alt={alt} className={className} />;
// };

// export default LazyImage;
