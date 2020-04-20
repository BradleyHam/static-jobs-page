import React from 'react';
import classes from './FilterBarTag.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const FilterTagBar = (props) => {
    return (
        <div className={classes.tag}>{props.tag}
            <div className={classes.icon} onClick={() => { props.removeTag(props.tag) }}>
                <FontAwesomeIcon icon={faTimes} />
            </div>
        </div>);
}

export default FilterTagBar;