import React from "react";
import { useMediaQuery } from "react-responsive";
import { useLocation } from "react-router-dom";
import { ScreenSize } from "../../../Config";
import DesktopFooter from "./DesktopFooter";
import MobileFooter from "./MobileFooter";
import { Container } from "@material-ui/core";
// import { protectedRoute } from "../../Data/common";
function Footer() {
  const isMobile = useMediaQuery({ maxWidth: ScreenSize.mobile });

  const location = useLocation().pathname;

  return (
    <>
      {location?.includes(
        'admin'
      ) ? null : (
        <footer className="footerContainer">
          <Container>
            {isMobile && <MobileFooter />}
            {!isMobile && <DesktopFooter />}
          </Container>
        </footer>
      )}
    </>
  );
}

export default Footer;
