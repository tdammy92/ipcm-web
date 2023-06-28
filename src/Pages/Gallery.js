import React, { useState, useEffect } from "react";
import Footer from "../components/partials/Footer/Footer";
import { Container } from "@material-ui/core";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import ImageCard from "../components/partials/ImageCard";
import axios from "axios";
import { BaseUrl } from "../Services/api/BaseUrl";

function Gallery() {
  const [isLoadimng, setisLoadimng] = useState(false);
  const [Images, setImages] = useState([]);

  const getGalleryImages = async () => {
    setisLoadimng(true);
    try {
      const res = await axios.get(`${BaseUrl}gallery`, {});

      setImages(res?.data);
    } catch (error) {
      console.log(error);
    } finally {
      setisLoadimng(false);
    }
  };

  useEffect(() => {
    getGalleryImages();

    return () => {};
  }, []);

  return (
    <div className="base__page">
      <div className="About__container">
        <Container
          fluid="true"
          mx="auto"
        >
          <h4 className="page__title">Gallery</h4>

          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
          >
            <Masonry>
              {Images?.map((image, i) => (
                <ImageCard
                  key={i}
                  image_url={image?.image?.url}
                  //   caption={`image number of series testing testing your image length ${i}`}
                  caption={image?.caption}
                />
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </Container>
      </div>
      <Footer />
    </div>
  );
}

export default Gallery;
