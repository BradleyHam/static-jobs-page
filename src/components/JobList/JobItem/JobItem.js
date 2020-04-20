import React, { useState } from 'react'
import classes from './JobItem.module.scss'
import LeftSideTag from './LeftSideTag/LeftSideTag'
import RightSideTag from './RightSideTag/RightSideTag'

const JobItem = (props) => {

    let { company, contract, featured, id, languages,
        level, location, logo, position,
        postedAt, role, tools } = props.job

    let pic = company.toLowerCase().replace(/\s/g, '-');
    let finalPic = pic.endsWith('.') ? pic.slice(0, -1) : pic;

    let tagArray = [role]

    if (languages && languages.length > 0) {
        tagArray.push(...languages)
    }

    if (tools && tools.length > 0) {
        tagArray.push(...tools)
    }

    let tagJsx = tagArray.map(tag => <RightSideTag tag={tag} key={tag} addTag={props.addTag} />)

    let leftSideTagJsx = [];

    props.job.new && leftSideTagJsx.push(<LeftSideTag isNew={true} />)
    featured && leftSideTagJsx.push(<LeftSideTag isFeatured={true} />)

    return (
        <div className={classes.jobItem}>
            <div className={classes.left}>
                <img src={`/images/${finalPic}.svg`} alt="" />
                <div className={classes.details}>
                    <div className={classes.topRow}><p className={classes.company}>{company}</p>{leftSideTagJsx}</div>
                    <p className={classes.jobTitle}>{position}</p>
                    <p className={classes.whenPosted}>{`${postedAt} - ${contract} - ${location}`}</p>
                </div>
            </div>
            <div className={classes.right}>
                {tagJsx}
            </div>
        </div>
    );
}

export default JobItem;

