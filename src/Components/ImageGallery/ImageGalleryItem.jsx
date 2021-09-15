import React from "react";
import PropTypes from "prop-types";

const ImageGalleryItem = ({ id, webformatURL, alt, largeImgClick }) => {
  return (
    <li key={id} className="ImageGalleryItem" onClick={() => largeImgClick(id)}>
      <img src={webformatURL} alt={alt} className="ImageGalleryItem-image" />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  webformatURL: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  largeImgClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
