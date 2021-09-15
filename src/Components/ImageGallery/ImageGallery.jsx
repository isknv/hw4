import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import Api from "../../services/Api";
import ImageGalleryItem from "./ImageGalleryItem";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";

const ImageGallery = ({ search }) => {
  const [img, setImg] = useState([]);
  const [imgModal, setImgModal] = useState("");
  const [pending, setPending] = useState(false);

  useEffect(() => {
    if (!search) return;
    setImg([]);
    Api.query(search);
    Api.reset();
    saveImg();
  }, [search]);

  useEffect(() => {
    if (Api.page === 1) return;
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  }, [img]);

  const closeModal = () => {
    setImgModal("");
  };

  const loadMore = () => {
    Api.loadMoreImg();
    saveImg();
  };

  const largeImgClick = id => {
    const largeImageURL = img.find(
      (event, index) => index === id
    ).largeImageURL;
    setImgModal(largeImageURL);
  };

  const saveImg = () => {
    setPending(true);

    Api.fetchArticles()
      .then(({ hits }) => setImg(prev => [...prev, ...hits]))
      .catch(error => console.log(error))
      .finally(() => setPending(false));
  };

  return (
    <>
      <ul className="ImageGallery">
        {img.map(({ webformatURL, tags }, index) => (
          <ImageGalleryItem
            webformatURL={webformatURL}
            alt={tags}
            id={index}
            key={index}
            largeImgClick={largeImgClick}
          />
        ))}
      </ul>

      {imgModal && (
        <Modal closeModal={closeModal}>
          <img src={imgModal} alt="Modal" />
        </Modal>
      )}

      <div className="container-btn">
        {!!img.length && !pending && <Button loadMore={loadMore} />}
      </div>

      <div className="container-loader">
        {pending && (
          <Loader type="Puff" color="#00BFFF" height={200} width={200} />
        )}
      </div>
    </>
  );
};

ImageGallery.propTypes = {
  search: PropTypes.string,
};

export default ImageGallery;
