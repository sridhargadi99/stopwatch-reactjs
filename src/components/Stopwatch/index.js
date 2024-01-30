// Write your code here
import {Component} from 'react'
import './index.css'

const initialStateValues = {
  timerRunning: false,
  timerInMinutes: 0,
  timerInSeconds: 0,
}

class Stopwatch extends Component {
  state = initialStateValues

  componentWillUnmount() {
    this.clearTimeInterval()
  }

  clearTimeInterval = () => {
    clearInterval(this.timerId)
  }

  clickStartButton = () => {
    this.timerId = setInterval(this.click, 1000)
    this.setState({timerRunning: true})
  }

  clickStopButton = () => {
    this.clearTimeInterval()
    this.setState({timerRunning: false})
  }

  clickResetButton = () => {
    this.clearTimeInterval()
    this.setState(initialStateValues)
  }

  click = () => {
    this.setState(prevState => ({timerInSeconds: prevState.timerInSeconds + 1}))
  }

  getMinutesAndSeconds = () => {
    const {timerInMinutes, timerInSeconds} = this.state
    const totalSeconds = timerInMinutes * 60 + timerInSeconds
    const minutes = Math.floor(totalSeconds / 60)
    const seconds = Math.floor(totalSeconds % 60)
    const finalMinutes = minutes > 9 ? minutes : `0${minutes}`
    const finalSeconds = seconds > 9 ? seconds : `0${seconds}`
    return `${finalMinutes}:${finalSeconds}`
  }

  render() {
    const {timerRunning} = this.state
    return (
      <div className="bg-container">
        <div className="sub-container">
          <h1 className="watch-heading-style">Stopwatch</h1>
          <div className="watch-container">
            <div className="timer-content-container">
              <img
                className="timer-style"
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png "
                alt="stopwatch"
              />
              <p className="timer-paragraph-style">Timer</p>
            </div>
            <h1 className="timer-heading-style">
              {this.getMinutesAndSeconds()}
            </h1>
            <div className="button-container">
              <button
                type="button"
                className="button-style button-style1"
                onClick={this.clickStartButton}
                disabled={timerRunning}
              >
                Start
              </button>
              <button
                type="button"
                className="button-style button-style2"
                onClick={this.clickStopButton}
              >
                Stop
              </button>
              <button
                type="button"
                className="button-style button-style3"
                onClick={this.clickResetButton}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
