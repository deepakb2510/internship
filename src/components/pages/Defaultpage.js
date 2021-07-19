import React from 'react'
import MediaControlCard from '../contents/musiccard'
import MediaCard from '../contents/cards';
import classes from './Defaultpage.module.css'
function Defaultpage(){
    return(
        <div className={classes.page}>
            <MediaCard/> 
            <MediaCard/>
        </div>
    )
}

export default Defaultpage;