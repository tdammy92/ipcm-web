import React from 'react'
import {useMediaQuery} from 'react-responsive'
import { useLocation } from 'react-router-dom'
import {ScreenSize} from '../../../Config'
import DesktopFooter from './DesktopFooter'
import MobileFooter from './MobileFooter'


function Footer() {

    const isMobile = useMediaQuery({maxWidth:ScreenSize.mobile})


    const location = useLocation().pathname;

    return (

        <>
{
    (location ==='/sigin' || location==='/signup' || location==='/admin') ? null :   <footer className='footerContainer'>

                

{isMobile && <MobileFooter/>}

{!isMobile && <DesktopFooter/>}

</footer>
}

        </>
      
    )
}

export default Footer;
