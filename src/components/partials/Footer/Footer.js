import React from 'react'
import {useMediaQuery} from 'react-responsive'
import {ScreenSize} from '../../../Config'
import DesktopFooter from './DesktopFooter'
import MobileFooter from './MobileFooter'


function Footer() {

    const isMobile = useMediaQuery({maxWidth:ScreenSize.mobile})



    return (
        <footer className='footerContainer'>

                

                {isMobile && <MobileFooter/>}

                {!isMobile && <DesktopFooter/>}
            
        </footer>
    )
}

export default Footer;
