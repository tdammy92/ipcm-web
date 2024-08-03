import React from "react";
import { useLocation, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useMediaQuery } from "react-responsive";
import { Container } from "@material-ui/core";
import { ScreenSize } from "../../../Config";
import { Link } from "react-router-dom";

import ImgeUrl from "../../../assets/images/IGPCM_NewLogo.png";
import DesktopNavBar from "./DesktopNavBar";
import MobileNavBar from "./MobileNavBar";
import { LogOutUser } from "../../../Store/feature";
import { protectedRoute, unProtectedRoute } from "../../Data/common";

function NavBar() {
  const dispatch = useDispatch();
  const history = useHistory();
  const {
    details
  } = useSelector((state) => state.users);

  const isMobile = useMediaQuery({ maxWidth: ScreenSize.mobile });

  const location = useLocation().pathname;

  async function handleLogout() {
    dispatch(LogOutUser());
    history.replace("/");
  }

  return (
    <div className="navContainer">
      <Container maxWidth="lg">
        <div className="navWrapper">
          <Link to="/" className="LogoContainer">
            <div className="Logo">
              <img src={ImgeUrl} alt="ipcm logo" />
            </div>

            <h2 className="LogoText">
              IGPCM
              <span className="RC_Number">RC:1787595</span>
            </h2>
          </Link>

          {unProtectedRoute.includes(location) ? (
            <>
              {!isMobile && <DesktopNavBar />}
              {isMobile && <MobileNavBar />}
            </>
          ) : null}

          <>
            {protectedRoute.includes(location) && (
              <div style={{ display: "flex", alignItems: "center" }}>
                <p style={{ marginRight: "5px", color: "#01996D" }}>
                  {details?.email.split("@")[0].toUpperCase()}
                </p>
                ||
                <span
                  onClick={handleLogout}
                  style={{ color: "red", marginLeft: "5px", cursor: "pointer" }}
                >
                  Logout
                </span>
              </div>
            )}
          </>
        </div>
      </Container>
    </div>
  );
}

export default NavBar;
