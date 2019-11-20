import React from 'react'
import Timeline from 'react-calendar-timeline'
// make sure you include the timeline stylesheet or the timeline will not be styled
import 'react-calendar-timeline/lib/Timeline.css'
import moment from 'moment'
import interact from 'interactjs'
import SleepPeriod from './SleepPeriod'

const Diary = ({
    sleepPeriods, 
    comments,
    exts
}) => {

    const groups = [{ id: 1, title: 'entries' }]
    const items = [
      {
        id: 1,
        group: 1,
        title: 'coffee',
        start_time: moment(),
        end_time: moment().add(1, 'hour')
      },
      {
        id: 2,
        group: 1,
        title: 'sleep',
        start_time: moment().add(1, 'days').add(2, 'hour'),
        end_time: moment().add(1, 'days').add(7, 'hour')
      },
      {
        id: 3,
        group: 1,
        title: 'coffee',
        start_time: moment().add(2, 'hour'),
        end_time: moment().add(3, 'hour')
      }
    ]

    return (
        <div>
            <Timeline
              groups={groups}
              items={items}
              defaultTimeStart={moment().startOf('day')}
              defaultTimeEnd={moment().endOf('day')}
            />
            <Timeline
              groups={groups}
              items={items}
              defaultTimeStart={moment().add(1, 'days').startOf('day')}
              defaultTimeEnd={moment().add(1, 'days').endOf('day')}
            />
        </div>
    )
}

export default Diary