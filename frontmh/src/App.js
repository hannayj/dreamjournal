import React, {useState, useEffect} from 'react';
import axios from 'axios'
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from './components/Button';
import ExternalTable from './components/ExternalTable';
import extService from './services/externals';

const App= () => {
  const extData = extService.getAll();
  const [exts, setExts] = useState({startTime: '', externalType: '', quantity: 0})
  const [newExt, setNewExt] = useState({})
  const [showExts, setShowExts] = useState(true);
  
  useEffect(() => {
    extService.getAll()
    .then(initialExts => setExts(initialExts))
  }, [setExts])

  const handleExtChange = (event) => {
    setNewExt({
      ...exts,
      [event.target.name] : event.target.value
    })
  }

  const addExt = (event) => {
    event.preventDefault() 
    const extObject = {
      content: newExt,
      date: new Date().toISOString()
    }
    extService
      .create(extObject)
      .then(data => {
        setExts(exts.concat(data))
        setNewExt({startTime: '', externalType: '', quantity: 0})
      })
  }

  return (
    <div className="App">
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="h3" color="inherit">
          Sleepdiary
          </Typography>
        </Toolbar>
      </AppBar>
      <Typography variant="h5" color="inherit">
          Hi, how did you sleep?
          </Typography>
      <Button text='Add sleep'/>
      <Button text='Add others'/>
      <Button text='Add comment'/>
      <form onSubmit={addExt}>
        <h1>Add others</h1>
        <label htmlFor='dateTime'>Start time</label>
        <p><input onChange={handleExtChange} type='datetime-local' id='dateTime' value={exts.startTime}/></p>
        <p>Type</p>
        <p><select value={exts.externalType}
        onChange={handleExtChange} >
          <option value="COFFEE">COFFEE</option>
          <option value="ALCOHOL">ALCOHOL</option>
          <option value="MEDICINE">MEDICINE</option>
          <option value="OTHER">OTHER</option>
        </select></p>
        <label htmlFor='quantity'>Quantity</label>
       <p> <input onChange={handleExtChange} type='text' id='quantity' value={exts.quantity}/></p>
        <button type="submit">Save</button>
      </form>
      <ExternalTable externals={extData}/>
    </div>
  )
}

export default App;
