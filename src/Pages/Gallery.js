import React from "react";
import Footer from "../components/partials/Footer/Footer";
import { Container } from "@material-ui/core";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { galaryImages } from "../components/Data/galaryArray";
import ImageCard from "../components/partials/ImageCard";

function Gallery() {
	return (
		<div className="base__page">
			<div className="About__container">
				<Container fluid="true" mx="auto">
					<h4 className="page__title">Gallery</h4>

					<ResponsiveMasonry
						columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
					>
						<Masonry>
							{galaryImages?.map((image, i) => (
								<ImageCard key={i} image_url={image?.image_url} />
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
