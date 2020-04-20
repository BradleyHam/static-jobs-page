import React, { useState, useEffect } from 'react'
import classes from './JobList.module.scss'
import jobs from '../../data.json'
import JobItem from './JobItem/JobItem'
import FilterBar from '../FilterBar/FilterBar'

const JobList = () => {
    const [jobData, setJobData] = useState(jobs);
    const [showFilter, setShowFilter] = useState(false);
    const [selectedTags, setSelectedTags] = useState([])

    function addTag(e) {
        let updatedSelectedTags = [...selectedTags, e.target.innerText]
        setSelectedTags([...new Set(updatedSelectedTags)])
        setShowFilter(true)
    }
    function removeTag(tagToRemove) {
        let updatedTags = selectedTags.filter(i => i !== tagToRemove)
        setSelectedTags(updatedTags)
    }
    function clearTags() {
        setSelectedTags([])
    }

    let jobsJsx;

    if (selectedTags.length < 1) {
        jobsJsx = jobData.map(job => {
            return (
                <JobItem job={job} addTag={addTag} key={job.id} />
            )
        })
    } else {
        jobsJsx = jobData.filter(job => {
            let values = Object.values(job);
            return selectedTags.every(tag => values.includes(tag)
                || job.languages && job.languages.includes(tag)
                || job.tools && job.tools.includes(tag))
        }).map(job => {
            return (
                <JobItem job={job} addTag={addTag} key={job.id} />
            )
        })
    }

    return (
        <div className={classes.jobList}>
            {showFilter && <FilterBar selectedTags={selectedTags} removeTag={removeTag} clearTags={clearTags} />}
            <ul>
                {jobsJsx}
            </ul>
        </div>
    );
}

export default JobList;