import React from 'react';
import SleepPeriod from './SleepPeriod'
import Comment from './Comment'
import External from './External'

const FilteredView = ({
    date,
    length,
    sleeps,
    comments,
    exts,
    updateSleepPeriod,
    removeSleepPeriod,
    deleteComment,
    updateComment,
    deleteExternal,
    updateExternal
}) => {
    
    /**
     * getStartTime is only interested on the date of props.date
     * Sets the time to 12:00:00.00
     * So the returned value is props.date 12:00:00.00
     */
    const getStartTime = () => {
        let start = new Date(date)
        start.setHours(12,0,0,0)

        //const dummy = new Date('2019-09-01T12:00:00')

        return start
    }

    /**
     * Calculates the endTime based on startTime
     * endtime = startTime + 24h * props.length
     * So the returned value should props.date + 24h * props.lengt 12:00:00.00
     */
    const getEndTime = () => {
        let end = new Date(getStartTime().getTime() + (86400000 * length))
        return end
    }

    /**
     * returns the param.sleeps starting between [getStartTime(),getEndTime()[
     */
    const getSleeps = () => {
        if(sleeps) {
            const filtered = sleeps.filter(s => {
                const startTime = new Date(s.startTime).getTime()
                if(startTime >= getStartTime().getTime() && startTime < getEndTime().getTime()) {
                    return true
                }
                return false
            })
            return filtered
        }
    }

    const getComments = () => {
        if(comments) {
            const filtered = comments.filter(c => {
                const start = new Date(c.commentDate).getTime()
                if(start >= getStartTime().getTime() && start < getEndTime().getTime()) {
                    return true
                }
                return false
            })
            return filtered
        }
    }

    const getExts = () => {
        if(exts) {
            const filtered = exts.filter(e => {
                // WHAT IS THE NAME OF THE DATETIME VARIABLE FOR EXTS?
                const start = new Date(e.externalDate).getTime()
                if(start >= getStartTime().getTime() && start < getEndTime().getTime()) {
                    return true
                }
                return false
            })
            return filtered
        }
    }

    const getFiltered = () => {
        return {
            filteredSleeps: getSleeps(),
            filteredComments: getComments(),
            filteredExts: getExts()
        }
    }
    
    return(
        <>
            <hr />
            <h5>Selected time period</h5>
            <h6><b>{getStartTime().toLocaleString()} - {getEndTime().toLocaleString()}</b></h6>
            <hr />
            {getFiltered().filteredSleeps.map(s =>
                <SleepPeriod 
                    key={s.id}
                    sleepPeriod={s}
                    updateSleepPeriod={updateSleepPeriod}
                    removeSleepPeriod={removeSleepPeriod}
                />
            )}
            {getFiltered().filteredComments.map(c => 
                <Comment 
                    key={c.id}
                    comment={c}
                    deleteComment={deleteComment}
                    updateComment={updateComment}
                />    
            )}
            {getFiltered().filteredExts.map(e =>
                <External
                    key={e.id}
                    ext={e}
                    deleteExternal={deleteExternal}
                    updateExternal={updateExternal}
                />
            )}
            <hr />
        </>
    )
}

export default FilteredView;