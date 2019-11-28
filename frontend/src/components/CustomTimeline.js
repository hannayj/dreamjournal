import React from 'react'
import Timeline from 'react-calendar-timeline'
// make sure you include the timeline stylesheet or the timeline will not be styled
import 'react-calendar-timeline/lib/Timeline.css'
import moment from 'moment'
//import interact from 'interactjs'

const CustomTimeline = ({
    date,
    sleepPeriods, 
    comments,
    exts
}) => {

  let commentArray1 = comments.map(c => c.commentDate)
  let commentArray2 = comments.map(c => c.comment)
  let commentArray3 = comments.map(c => c.sleepQuality)

  const getDayArray = () => {
    //TODO fix: date follows the value of dateselect
    //let day = new Date(date) 
    //let beginning = moment('day').subtract(7, 'days').startOf("day").toDate();
    let beginning = moment('2019-09-08T12:00:00').subtract(7, 'days').startOf("day").toDate();
    console.log("alku: ", beginning)
    let dates = []	
    //TODO make an input to set the state of the value for repeats, currently 7 days
		for (let i = 0; i<7; i++) {
      let comment = ""
      for (let j=0; j<commentArray1.length; j++) {
        let a = moment(commentArray1[j]).startOf("day")
        let b = moment(beginning).add(i, "day").startOf("day")
        console.log("commentdate: ", a.format('DD.MM.YYYY'))
        console.log("date in loop: ", b.format('DD.MM.YYYY'))
        // if comment date is the same as the timeline date (difference in days is 0), add to array
        //does the comment belong to the same day or the day before?
        console.log("difference: ", a.diff(b))
        if (a.diff(b) === 0) {
          comment = 
          moment(commentArray1[j]).format('dddd') + ": " + commentArray2[j] + ", sleepquality: " + commentArray3[j]
          console.log(comment)
        }
      }
			dates.push({
        id: i,
        start: moment(beginning).add(i, "day").startOf("day").toDate(),
        end: moment(beginning).add(i, "day").endOf("day").toDate(),
        comment: comment
      })
		}
    //console.log(dates)
    //const dummy = new Date('2019-09-01T12:00:00')

    return dates
} 
  const startDate = () => {
    let day = new Date(date) 
    let startDate = moment(day).startOf("day").toDate();
    return startDate
  }
 

    const groups = [{ id: 1, title: 'entries' }]
    //console.log(sleepPeriods)
    let array, array1, array2 = []
    const items = []
    
      array = sleepPeriods.map( s => s.id)
      array1 = sleepPeriods.map( s => Math.floor(moment(s.startTime).valueOf() / 10000000) * 10000000)
      array2 = sleepPeriods.map( s => Math.floor(moment(s.endTime).valueOf() / 10000000) * 10000000)
      let length = array.length
    
      for (let i = 0; i<length; i++) {
        items.push({
          id: array[i],
          group: 1,
          title: 'sleep',
          start_time: array1[i],
          end_time: array2[i]
        })
        //console.log(items[i])
      }

      let extArray1, extArray2, extArray3 = []
      
      extArray1 = exts.map( e => e.id)
      extArray2 = exts.map( e => Math.floor(moment(e.externalDate).valueOf() / 10000000) * 10000000)
      extArray3 = exts.map( e => e.externalType + " " + e.quantity)
      let length2 = extArray1.length
    // console.log(extArray1)
      
    for (let i = 0; i<length2; i++) {
      items.push({
        id: extArray1[i] + length, //needs to be unique id 
        group: 1,
        title: extArray3[i],
        start_time: extArray2[i],
        end_time: extArray2[i],
        itemProps: {
          style: {
            color: 'black',
            background: 'red'
          }
        }
      })
    }

console.log(items)
  
    return (
        <div>
             <h6><b>{moment(startDate()).format('DD.MM.YYYY')}</b></h6>
             { getDayArray().map(d =>
             <div key={d.id}>
              <Timeline
                key={d.id}
                groups={groups}
                items={items}
                defaultTimeStart={d.start}
                defaultTimeEnd={d.end}
              />
              <span>{d.comment}</span>
            </div>
             )}
        </div>
    )
}

export default CustomTimeline