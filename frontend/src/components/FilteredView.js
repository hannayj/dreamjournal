import React from 'react';
import SleepPeriod from './SleepPeriod'
import Comment from './Comment'
import External from './External'
import Timeline from 'react-calendar-timeline'
import 'react-calendar-timeline/lib/Timeline.css'


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
    

    const getStartTime = () => {
        let start = new Date(getEndTime().getTime() - (86400000 * length))

        return start
    }

    const getEndTime = () => {
        let end = new Date(date)
        end.setHours(12,0,0,0)
        
        return end
    }

    const getSleepsForPeriod = (start, end) => {
        if(sleeps) {
            const filtered = sleeps.filter(s => {
                const startTime = new Date(s.startTime).getTime()
                if(startTime >= start.getTime() && startTime < end.getTime()) {
                    return true
                }
                return false
            })
            return filtered
        }
    }

    const getCommentsForPeriod = (start, end) => {
        if(comments) {
            const filtered = comments.filter(c => {
                const commentTime = new Date(c.commentDate).getTime()
                if(commentTime >= start.getTime() && commentTime < end.getTime()) {
                    return true
                }
                return false
            })
            return filtered
        }
    }

    const getExtsForPeriod = (start, end) => {
        if(exts) {
            const filtered = exts.filter(e => {
                const externalDate = new Date(e.externalDate).getTime()
                if(externalDate >= start.getTime() && externalDate < end.getTime()) {
                    return true
                }
                return false
            })
            return filtered
        }
    }

    const getPeriodValues = () => {
        let end = new Date(date)
        end.setHours(12,0,0,0)
        let start = new Date(end.getTime() - 86400000)

        let periods = [{
            start: start,
            end: end,
            sleep: getSleepsForPeriod(start, end),
            comment: getCommentsForPeriod(start, end),
            external: getExtsForPeriod(start, end)
        }]

        for(let i = 1; i < length; i++) {
            end = start
            start = new Date(end.getTime() - 86400000)
            periods = [...periods, {
                start: start,
                end: end,
                sleep: getSleepsForPeriod(start, end),
                comment: getCommentsForPeriod(start, end),
                external: getExtsForPeriod(start, end)
            }]
        }

        return(periods.reverse())
    }
    
    return(
        <>
            <hr />
            <h5>Selected time period(s)</h5>
            <h6><b>{getStartTime().toLocaleString()} - {getEndTime().toLocaleString()}</b></h6>
            <hr />
            {getPeriodValues().map(period => {
                return(
                    <div key={period.start + period.end}>
                        {period.sleep.map(s => <SleepPeriod 
                            key={s.id}
                            sleepPeriod={s}
                            updateSleepPeriod={updateSleepPeriod}
                            removeSleepPeriod={removeSleepPeriod}
                        />)}
                        {period.comment.map(c => <Comment 
                            key={c.id}
                            comment={c}
                            deleteComment={deleteComment}
                            updateComment={updateComment}
                        />)}
                        {period.external.map(e => <External
                            key={e.id}
                            ext={e}
                            deleteExternal={deleteExternal}
                            updateExternal={updateExternal}
                        />)}
                    </div>
                )
            })}
            <hr />
        </>
    )
}

export default FilteredView;