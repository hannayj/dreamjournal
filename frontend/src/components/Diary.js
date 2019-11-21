import React from 'react'
import Timeline from 'react-calendar-timeline'
// make sure you include the timeline stylesheet or the timeline will not be styled
import 'react-calendar-timeline/lib/Timeline.css'
import moment from 'moment'
import interact from 'interactjs'

const Diary = ({
    date,
    sleepPeriods, 
    comments,
    exts
}) => {
    const startDate = moment('2019-09-01T12:00:00').startOf("day").toDate();
    const endDate = moment('2019-09-01T12:00:00').endOf("day").toDate();
    const nextDate = moment('2019-09-01T12:00:00').add(1, "day").startOf("day").toDate()
    const nextDate2 = moment('2019-09-01T12:00:00').add(1, "day").endOf("day").toDate()
    const groups = [{ id: 1, title: 'entries' }]
    //console.log(sleepPeriods)
    let array, array1, array2 = []
    array = sleepPeriods.map( s => s.id)
    array1 = sleepPeriods.map( s => Math.floor(moment(s.startTime).valueOf() / 10000000) * 10000000)
    array2 = sleepPeriods.map( s => Math.floor(moment(s.endTime).valueOf() / 10000000) * 10000000)
    //array1 = sleepPeriods.map( s => Math.floor(new Date(s.startTime).getTime()/1000.0)) //unix timestamp
    //array2 = sleepPeriods.map( s => Math.floor(new Date(s.endTime).getTime()/1000.0))
   // console.log(array)
    const items = []
    for (let i = 0; i<3; i++) {
      items.push({
        id: array[i],
        group: 1,
        title: 'sleep',
        start_time: array1[i],
        end_time: array2[i]
      })
      //console.log(items[i])
    }
    console.log(items)

    /*const items = [
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
    */
    return (
        <div>
            <Timeline
              groups={groups}
              items={items}
              defaultTimeStart={startDate}
              defaultTimeEnd={endDate}
            />
            <Timeline
              groups={groups}
              items={items}
              defaultTimeStart={moment('2019-09-01T12:00:00').add(1, "day").startOf("day").toDate()}
              defaultTimeEnd={moment('2019-09-01T12:00:00').add(1, "day").endOf("day").toDate()}
            />
        </div>
    )
}

export default Diary