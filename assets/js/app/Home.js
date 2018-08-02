import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import DatePicker from 'react-datepicker'
import moment from 'moment'

class Home extends Component {

  state = {
      name: ''
    }
  
 
  render () {
    return (
        <section id='home'>
          <div className="container">
            <div className="col-md-6">
              <img src="/img/bitcoin-icon.png" className="bitcoin-logo"/>
            </div>
            <div className="col-md-6">
              <h2>Enter Transaction</h2>

              <label>Crypto Amount</label>
              <input type="text" name="amount" onChange={this.props.onInputChange} value={this.props.globalState.cryptoAmount}/>

              <label>Date</label>
              <DatePicker 
                selected={this.props.globalState.startDate}
                onChange={this.props.handleDateChange}

              />

              <button type="submit" onClick={this.props.apiCall}>check profits</button>
            </div>
          </div>
         
        </section>
      )
  }
}

export default Home




