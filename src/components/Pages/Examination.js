import React from 'react'
import Footer from '../partials/Footer/Footer'
import { Paper } from '@material-ui/core'
import { Typography } from '@material-ui/core'

function Examination() {
    return (

        <div className='base__page'>
        <div  className='About__container'>
            <h3 className='page__title'>Examination</h3>

        <div className="about__body">


                <Paper color='primary'>
                <Typography variant="h4" component="h2" color='primary' align='center'>
                    Coming Soon
                    </Typography>
                </Paper>
            </div>
            
        </div>
        <Footer/>
    </div>
    )
}

export default Examination
