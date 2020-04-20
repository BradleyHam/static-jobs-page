import React from 'react';
import classes from './RightSideTag.module.scss'

const RightSideTag = (props) => {
    return (
        <div onClick={props.addTag} className={classes.tag}>
            <div >{props.tag}</div>
        </div>
    );
}

export default RightSideTag;