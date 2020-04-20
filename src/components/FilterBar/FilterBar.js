import React, { useState, useEffect } from 'react'
import classes from './FilterBar.module.scss'
import FilterBarTag from './FilterBarTag/FilterBarTag'

const FilterBar = (props) => {
    let [tags, setTags] = useState(props.selectedTags)

    let tagsJsx = tags.map(tag => <FilterBarTag tag={tag} removeTag={props.removeTag} />)

    useEffect(() => {
        setTags([...new Set(props.selectedTags)])
    }, [props.selectedTags])

    return (
        <div className={classes.filterBar}>
            <div className={classes.tagList}>
                {tagsJsx}
            </div>
            <p className={classes.clear} onClick={props.clearTags}>Clear</p>
        </div>
    );
}

export default FilterBar;