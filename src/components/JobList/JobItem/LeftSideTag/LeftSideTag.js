import React from 'react';
import classes from './LeftSideTag.module.scss'

const LeftSideTag = (props) => {
    return (<div className={classes.tag}>{props.isNew ? <p className={`${classes.p} ${classes.new}`}>New!</p> :
        <p className={`${classes.p} ${classes.featured}`}> Featured!</p>}</div>)
}

export default LeftSideTag;