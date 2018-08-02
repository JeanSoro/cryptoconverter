import React, { Component} from 'react'
import ReactDOM from 'react-dom'

class Results extends Component {

  constructor(){
    super()

    this.state = {
      name: ''
    }

    this.checkGains = this.checkGains.bind(this)
  }

    

    checkGains() {
      const { percentage } = this.props.globalState.totalStatus

      if(this.props.globalState.status == 'gain') {
        return `You made ${percentage}% profit`
      } else {
        return `You made a lost of ${percentage}% off your current investment`
      }
    }
  
 
  render () {
    const {percentage, newCP, newSP} = this.props.globalState.totalStatus
    return (
        <section id='results'>
            <div className="container">
              <div className="col-md-12">
                <div className="ads"></div>
              </div>
              <div className="col-md-12">
                <h3>Your {newCP} dollar investment is now</h3>
                <h1>${newSP}</h1>
                <h4>{this.checkGains()}</h4>
                <a href="#" className="main-btn active">Create Account to keep track of your records</a>
                <a href="#" className="main-btn active" onClick={this.props.landingPage}>Check another transaction</a>
              </div>
              <div className="col-md-12">
                <div className="ads"></div>
            </div>
          </div>
        </section>
      )
  }
}

export default Results




