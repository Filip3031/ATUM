import React, { useState, useCallback } from "react";
import ImageViewer from "react-simple-image-viewer";
import "./gallery.scss";

function Gallery() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const images = [
    "/images/uniejow21-9.webp",
    "/images/uniejow21-8.webp",
    "/images/uniejow21-10.webp",
    "/images/makeup1.webp",
    "/images/makeup2.webp",
    "/images/biblioteka1.webp",
    "/images/biblioteka2.webp",
    "/images/biblioteka3.webp",
    "/images/grudziadz2.webp",
    "/images/grudziadz1.webp",
    "/images/uniejow20-1.webp",
    "/images/uniejow20-2.webp",
    "/images/uniejow20-3.webp",
    "/images/uniejow20-4.webp",
    "/images/uniejow20-5.webp",
    "/images/uniejow20-6.webp",
    "/images/uniejow20-7.webp",
    "/images/uniejow20-8.webp",
    "/images/uniejow20-9.webp",
    "/images/szczecin2.webp",
    "/images/szczecin1.webp",
    "/images/uniejow21-1.webp",
    "/images/uniejow21-2.webp",
    "/images/uniejow21-3.webp",
    "/images/uniejow21-4.webp",
    "/images/uniejow21-5.webp",
    "/images/uniejow21-6.webp",
    "/images/uniejow22-1.webp",
    "/images/uniejow22-2.webp",
    "/images/uniejow21-7.webp",
  ];

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <div id="gallery">
      {images.map((src, index) => (
        <img
          src={src}
          onClick={() => openImageViewer(index)}
          width="250px"
          key={index}
          style={{}}
          alt=""
        />
      ))}

      {isViewerOpen && (
        <ImageViewer
          src={images}
          currentIndex={currentImage}
          disableScroll={false}
          closeOnClickOutside={true}
          onClose={closeImageViewer}
        />
      )}
    </div>
  );
}

export default Gallery;
