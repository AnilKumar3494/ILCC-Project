import { useState } from "react";
import { Gallery } from "react-grid-gallery";
import { images as IMAGES } from "../lib/images";

export default function Masonary() {
  const images = IMAGES;
  //   const hasSelected = images.some((image) => image.isSelected);

  //   const handleSelect = (index) => {
  //     const nextImages = images.map((image, i) =>
  //       i === index ? { ...image, isSelected: !image.isSelected } : image
  //     );
  //     setImages(nextImages);
  //   };

  //   const handleSelectAllClick = () => {
  //     const nextImages = images.map((image) => ({
  //       ...image,
  //       isSelected: !hasSelected,
  //     }));
  //     setImages(nextImages);
  //   };

  return (
    <div>
      <Gallery
        images={images}
        enableImageSelection={false}
        tileViewportStyle={{ cursor: "default" }}
      />
    </div>
  );
}
