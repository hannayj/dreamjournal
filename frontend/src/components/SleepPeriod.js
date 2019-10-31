import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

const SleepPeriod = ({
  sleepPeriod,
  updateSleepPeriod,
  removeSleepPeriod
}) => {
  const [editMode, setEditMode] = useState(false)
  const [editableSleepPeriod, setSleepPeriod] = useState(sleepPeriod)

  return (
    <div className='product clearfix'>
      { editMode === false && 
        <div>
          <a href={ '/sleepPeriods/' + sleepPeriod.id }>
            Sleep period { sleepPeriod.id }
          </a>
          <p>Start time: { sleepPeriod.startTime }</p>
          <p>End time: { sleepPeriod.endTime }</p>
          <p>Duration: { sleepPeriod.duration }h</p>
          <br />
          <Button onClick={ () => removeSleepPeriod(sleepPeriod) } variant="danger" size="sm">Delete</Button>
          <Button onClick={ () => setEditMode(true) } variant="warning" size="sm">Edit</Button>
        </div>
      }
      { editMode === true && 
        <div>
          <a href={ '/sleepPeriods/' + sleepPeriod.id }>
            Sleep period { sleepPeriod.id }
          </a>
          <p>Start time: 
            <input
              onChange = {
                event => setSleepPeriod({...editableSleepPeriod,
                  startTime: event.target.value
                })
              }
              type='datetime-local'
              id='startTime'
              name='startTime'
              value={ editableSleepPeriod.startTime }
            />
          </p>
          <p>End time: 
            <input
              onChange = {
                event => setSleepPeriod({...editableSleepPeriod,
                  endTime: event.target.value
                })
              }
              type='datetime-local'
              id='endTime'
              name='endTime'
              value={ editableSleepPeriod.endTime }
            />
          </p>
          <p>Duration: { sleepPeriod.duration }h</p>
          <br />
          <button onClick={ () => removeSleepPeriod(sleepPeriod) }>Delete</button>
          <button onClick={ () => {
            updateSleepPeriod(editableSleepPeriod);
            setEditMode(false);
          }}>Save</button>
        </div>
      }
    </div>
  )
}

export default SleepPeriod