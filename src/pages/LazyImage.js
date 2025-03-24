import React from 'react';

const LazyImage = ({ src, alt, height, width, style }) => {
  return (
    <img 
      src={src} 
      alt={alt} 
      loading="lazy" 
      height={height} 
      width={width}
      style={style}
    />
  );
};

export default LazyImage;