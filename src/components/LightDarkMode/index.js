// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {mode: false}

  onChangeMode = () => {
    this.setState(prevState => ({mode: !prevState.mode}))
  }

  buttonText = () => {
    const {mode} = this.state
    return mode ? 'Dark Mode' : 'Light Mode'
  }

  classMode = () => {
    const {mode} = this.state
    return mode ? 'light-mode' : 'dark-mode'
  }

  render() {
    const cardStyles = this.classMode()

    return (
      <div className="bg-container">
        <div className={cardStyles}>
          <h1 className="heading">Click To Change Mode</h1>
          <button type="button" onClick={this.onChangeMode} className="button">
            {this.buttonText()}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
