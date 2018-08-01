import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import DatePicker from 'react-datepicker';
import moment from 'moment'
import Home from './Home';
import Results from './Results';
import axios from 'axios';

class Layout extends Component {

  state = {
      location: 'home',
      startDate: moment(),
      data:''
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
      }, () => console.log(this.state.startDate.unix()));
    }

    apiCall = () => {
      //

      let self = this;

      axios.get('https://min-api.cryptocompare.com/data/pricehistorical?fsym=BTC&tsyms=BTC,USD,EUR&ts=1533182706&extraParams=cryptoconverter_js')
        .then(function (response){
          self.setState({
            data: response.data.BTC
          }, () => {
            console.log(self.state)
          })
        }) 
        .catch(function(error){
          console.log(error)
        });
          
    }

  
 
  render () {
    return (
        <div className='home'>
          <div className="container">
            <header>
              <div className="logo" onClick={this.apiCall}>
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
