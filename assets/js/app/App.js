import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import Home from './Home';
import Results from './Results';

class Layout extends Component {

  state = {
      location: 'home',
      startDate: moment()
    }

    routingSystem = () => {

      switch(this.state.location) {
        case 'home':
          return <Home handleDateChange={this.handleDateChange} globalState={this.state}/>
          break;
        case 'results':
          return <Results/>
          break;
        default:
          return <Home/>
           
      }
    }

    handleDateChange = (date) => {
      this.setState({
        startDate: date
      })
    }

  
 
  render () {
    return (
        <div className='home'>
          <div className="container">
            <header>
              <div className="logo">
                Crypto Converter
              </div>
              <nav className="menu">
                <a href="#" className="main-btn">Register</a>
              </nav>
            </header>
            {this.routingSystem()}

          </div>
         
        </div>
      )
  }
}

const app = document.getElementById('app')

ReactDOM.render(<Layout />, app)
