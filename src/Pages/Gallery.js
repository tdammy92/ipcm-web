import { Container } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import ImageCard from "../components/partials/ImageCard";
import { BaseUrl } from "../Services/api/BaseUrl";
import { useGallery } from "../Services/queries/gallery-query";

function Gallery() {


  const {data:Images,isLoading:loadingGalary} = useGallery()



  return (
    <div className="base__page">
      <div className="About__container">
        <Container fluid="true" mx="auto">
          <h4 className="page__title">Gallery</h4>

          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
          >
            <Masonry>
              {Images?.map((image, i) => (
                <ImageCard
                  key={i}
                  image_url={image?.image?.url}
                  caption={image?.caption}
                />
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </Container>
      </div>
    </div>
  );
}

export default Gallery;
