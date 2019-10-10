import React, {useState, useEffect} from 'react';
import External from './components/External';
import ExternalForm from './components/ExternalForm'
import './App.css';

import extService from './services/externals';

const App= () => {
  
  const [exts, setExts] = useState([])
  const [extDate, setExtDate] = useState('')
  const [extType, setExtType] =useState('COFFEE')
  const [quantity, setQuantity] = useState('')
  
  useEffect(() => {
    extService.getAll()
    .then(allExts => {
      console.log(allExts)
      setExts(allExts)
    })
  }, [])

  const handleDateChange = (event) => setExtDate(event.target.value)
  const handleExtTypeChange = (event) => setExtType(event.target.value)
  const handleQuantityChange = (event) => setQuantity(event.target.value)

  const addExt = (event) => {
    event.preventDefault() 
    const newExt = { extDate, extType, quantity}
    console.log(newExt)
    extService
      .create(newExt)
      .then(returnedExt => {
        setExts(exts.concat(returnedExt))
        setExtDate('')
        setExtType('')
        setQuantity('')
      })
  }
  const formInputs = [
    {
      name: 'ExtDate',
      type: 'datetime-local',
      value: extDate,
      onChange: handleDateChange,
    },
    {
      name: 'Quantity',
      type: 'text',
      value: quantity,
      onChange: handleQuantityChange
    }
  ]

  const selectionInputs = {
    value: extType,
    onChange: handleExtTypeChange,
    values: [
      {
        id: 1,
        value: 'COFFEE'
      },
      {
        id: 2,
        value: 'ALCOHOL'
      },
      {
        id: 3,
        value: 'MEDICINE'
      },
      {
        id: 4,
        value: 'OTHER'
      }
    ]
  }
  return (
    <div>
      <h1>Add</h1>
      <ExternalForm inputs={formInputs} select={selectionInputs} submit={addExt} />
      <h1>External factors</h1>
      {exts.map(c => <External key={c.id} ext={c} />)}
    </div>
  );
}

export default App;
