import React from 'react'
import {useMediaQuery} from 'react-responsive'
import {ScreenSize} from '../../../Config'
import {Link} from 'react-router-dom'
import ImgeUrl from '../../../assets/images/ipcmLogo.png'
import DesktopNavBar from './DesktopNavBar'
import MobileNavBar from './MobileNavBar'






function NavBar() {

    const isMobile = useMediaQuery({maxWidth:ScreenSize.mobile})

    return (
        <div className='navContainer'>


        <Link to='/' className='LogoContainer'>
                        
                        <div className='Logo'>
                            <img 
                            src={ImgeUrl} 
                            alt='ipcm logo'/>
                        </div>
                    
                        <h2 className='LogoText'>
                            IGPCM
                            <span className='RC_Number'>RC:1787595</span>
                        </h2>

                    </Link>


                    {!isMobile &&
                 

                             <DesktopNavBar/>

                   }

                    
                    {isMobile &&
                    

                     <MobileNavBar/>

                 }
     
      


            
        </div>
    )
}





export default NavBar
