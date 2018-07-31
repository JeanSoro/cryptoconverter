import React, { Component} from 'react'
import ReactDOM from 'react-dom'

export default class Home extends Component {

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
              <input type="text" name="amount"/>

              <label>Date</label>
              <input type="text" name="date"/>

              <button type="submit">check profits</button>
            </div>
          </div>
         
        </section>
      )
  }
}




