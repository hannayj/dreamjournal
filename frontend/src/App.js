import React, { Component } from 'react'
import sleepPeriodService from './services/sleepPeriods'
import SleepPeriods from './components/SleepPeriods'
import Header from './components/Header'
import Nav from './components/Nav'
import Footer from './components/Footer'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sleepPeriods: [],
      startTime: '',
      endTime: '',
      showFooter: true,
      view: 'sleepperiods'
    }
  }

  componentDidMount() {
    document.title = 'Sleep Diary'
    this.fetchSleepPeriods()
  }

  fetchSleepPeriods = () => {
    sleepPeriodService
      .getAll()
      .then(sleepPeriods => this.setState({ sleepPeriods: sleepPeriods }))
  }

  hideFooter = () => {
    this.setState({ showFooter: false })
  }

  changeView = (view) => () => {
    this.setState({ view: view })
  }

  addSleepPeriod = () => (event) => {
    event.preventDefault()
    const startTime = event.target.startTime.value
    const endTime = event.target.endTime.value
    if (startTime && endTime) {
      const sleepPeriod = {
        startTime: startTime,
        endTime: endTime,
      }
      sleepPeriodService
        .create(sleepPeriod)
        .then(createdSleepPeriod => {
          this.setState({
            sleepPeriods: this.state.sleepPeriods.concat(createdSleepPeriod),
            startTime: '',
            endTime: ''
          })
        })
        .catch(error => console.log(error))
    }
  }

  updateSleepPeriod = (sleepPeriod) => (event) => {
    event.preventDefault()
    console.log("Saved!")
    // TODO: update modified sleep period
  }

  handleInputChange = () => (event) => {
    let value = ''
    const name = event.target.name
    if (event.target.selectedOptions) {
      value = Array.from(event.target.selectedOptions, (item) => item.value)
    } else {
      value = event.target.value
    }
    this.setState({ [name]: value })
    console.log('Value changed:' + name, value)
  }

  render() {
    return (
      <div id='container'>
        <Header
          changeView={ this.changeView }
        />
        <Nav
          changeView={ this.changeView }
        />
        <div id="main">
          { this.state.view === 'settings' &&
            // TODO: add settings view
            <></>
          }
          { this.state.view === 'sleepperiods' &&
            <SleepPeriods
              sleepPeriods={ this.state.sleepPeriods }
              addSleepPeriod= { this.addSleepPeriod }
              handleInputChange={ this.handleInputChange }
              startTime={ this.state.startTime }
              endTime={ this.state.endTime }
              updateSleepPeriod={ this.updateSleepPeriod }
            />
          }
        </div>
        { this.state.showFooter &&
          <Footer
            hideFooter={ this.hideFooter }
          />
        }
      </div>
    )
  }
}

export default App
