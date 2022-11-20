import React from "react";
import { useLocation,useHistory } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { useMediaQuery } from "react-responsive";
import { ScreenSize } from "../../../Config";
import { Link } from "react-router-dom";
import ImgeUrl from "../../../assets/images/ipcmLogo.png";
import DesktopNavBar from "./DesktopNavBar";
import MobileNavBar from "./MobileNavBar";
import {LogOutUser} from '../../../Store/feature'

function NavBar() {
const dispatch = useDispatch()
    const history = useHistory()
const {details:{admin}} = useSelector((state)=>state.users);



	const isMobile = useMediaQuery({ maxWidth: ScreenSize.mobile });

	const location = useLocation().pathname;


    async function handleLogout() {
    dispatch(LogOutUser())
	history.replace('/')
    }

	return (
		<div className='navContainer'>
			<Link to='/' className='LogoContainer'>
				<div className='Logo'>
					<img src={ImgeUrl} alt='ipcm logo' />
				</div>

				<h2 className='LogoText'>
					IGPCM
					<span className='RC_Number'>RC:1787595</span>
				</h2>
			</Link>
{/* 
			about
contact
member
nysc
examination
certification */}


			{location=== "/"||location === "/about" ||location === "/register"||
			location === "/contact" ||
			location === "/member" ||
			location === "/nysc" ||location==="/examination"||
			location === "/certification" ?  (
				<>
					{!isMobile && <DesktopNavBar />}
					{isMobile && <MobileNavBar />}
				</>
			) : null}

			<>
				{(location === "/admin" ||
					location === "/students/*" ||
					location === "/students" ||
					location === "/serial-number") && (
					<div style={{ display: "flex", alignItems: "center" }}>
						<p style={{ marginRight: "5px", color: "#01996D" }}>
							{admin?.email.split("@")[0].toUpperCase()}
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
	);
}

export default NavBar;
