import React from 'react'
import Timeline from 'react-calendar-timeline'
import 'react-calendar-timeline/lib/Timeline.css'

const Period = ({ period }) => {

    const convertToTimeZone = (date) => {
        const timeDiff = new Date(date).getTimezoneOffset()
        const oldMinutes = new Date(date).getMinutes()
        const newDate = new Date(date).setMinutes(oldMinutes + (-1 * timeDiff))
        return new Date(newDate).toString()
    }

    const getGroup = () => {
        const id = 1
        const title = ``
        return([{id, title}])
    }

    const getItems = () => {
        let items = []
        for(let i = 1; i <= period.sleep.length; i++) {
            items = [...items, {
                id: i,
                group: 1,
                title: `sleep ${i}`,
                start_time: new Date(convertToTimeZone(period.sleep[i-1].startTime)).getTime(),
                end_time: new Date(convertToTimeZone(period.sleep[i-1].endTime)).getTime()
            }]
        }
        for(let i = 1; i <= period.external.length; i++) {
            items = [...items, {
                id: i + period.sleep.length,
                group: 1,
                title: `ext ${i}`,
                start_time: new Date(period.external[i-1].externalDate).getTime(),
                end_time: new Date(period.external[i-1].externalDate).getTime() + 1000
            }]
        }
        return(items)
    }

    return(
        <Timeline 
            groups={getGroup()}
            items={getItems()}
            visibleTimeStart={new Date(period.start).getTime()}
            visibleTimeEnd={new Date(period.end).getTime()}
            sidebarWidth={0}
        />
    )
}

export default Period