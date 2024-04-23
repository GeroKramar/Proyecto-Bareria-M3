import React from 'react';

function ExampleCarouselImage({ text, src }) {
  return (
    <img
      className="d-block w-100"
      src={src}
      alt={text}
    />
  );
}

export default ExampleCarouselImage;