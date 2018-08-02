import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import DatePicker from 'react-datepicker';
import moment from 'moment'
import axios from 'axios';
import Home from './Home';
import Results from './Results';


class Layout extends Component {

  constructor(){
    super()
    this.state = {
      location: 'home',
      startDate: moment(),
      data:'',
      cryptoAmount: 1,
      status: '',
      totalStatus: ''
    }

    this.routingSystem = this.routingSystem.bind(this)
    this.handleDateChange = this.handleDateChange.bind(this)
    this.checkProfits = this.checkProfits.bind(this)
    this.onInputChange = this.onInputChange.bind(this)
    this.landingPage = this.landingPage.bind(this)
  }
  


    componentWillMount(){

      let self= this

      axios.get(`https://min-api.cryptocompare.com/data/pricehistorical?fsym=BTC&tsyms=BTC,USD,EUR&ts=${moment().unix()}&extraParams=cryptoconverter_js`)
      .then(function (response){
        
        self.setState({
          btcToday: response.data.BTC
        }, () => {
          console.log(self.state)
        })
      })
      .catch(function(error) {
        console.log(error)
      })
        
  }


    routingSystem() {

      switch(this.state.location) {
        case 'home':
          return <Home handleDateChange={this.handleDateChange} globalState={this.state} onInputChange={this.onInputChange} checkProfits={this.checkProfits}/>
          break;
        case 'results':
          return <Results globalState={this.state} landingPage={this.landingPage}/>
          break;
        default:
          return <Home/>
           
      }
    }

    handleDateChange(date) {
      this.setState({
        startDate: date
      }, () => console.log(this.state.startDate.unix()));
    }

    onInputChange (e) {
      this.setState({
        cryptoAmount: e.target.value
      })
    }


    

    checkProfits() {
      
      let self= this;

      axios.get(`https://min-api.cryptocompare.com/data/pricehistorical?fsym=BTC&tsyms=BTC,USD,EUR&ts=${self.state.startDate.unix()}&extraParams=cryptoconverter_js`)
        .then(function (response){
        
          self.setState({
            data: response.data.BTC
          }, () => {


            const costPrice = self.state.data.USD
            
            let newCP = self.state.cryptoAmount * 100

            newCP = (newCP * costPrice) / 100
            const sellingPrice = self.state.btcToday.USD
            let newSP = (self.state.cryptoAmount * 100)
            newSP = (newSP * sellingPrice) / 100

            if(newCP < newSP){

                let gain = newSP - newCP
                let gainPercentage = (gain / newCP) * 100
                gainPercentage = gainPercentage.toFixed(2)

                self.setState({
                  location: 'results',
                  status: 'gain',
                  totalStatus: {
                    newCP: newCP.toFixed(2),
                    costPrice,
                    newSP: newSP.toFixed(2),
                    sellingPrice,
                    percentage: gainPercentage
                  }
              })

            } else {

                let loss = newCP - newSP;
                let lossPercentage = ( loss / newCP ) * 100;
                lossPercentage = lossPercentage.toFixed(2)
              

                self.setState({
                  location: 'results',
                  status: 'loss',
                  totalStatus: {
                      newCP: newCP.toFixed(2),
                      costPrice,
                      newSP: newSP.toFixed(2),
                      sellingPrice,
                      percentage: lossPercentage
                  }
                })

            }

            self.setState({
              location: 'results'
            })

          })
        })
        .catch(function(error) {
          console.log(error)
        })
     
  }

  landingPage(){
      this.setState({
        location: 'home',
        startDate: moment(),
        data:'',
        cryptoAmount: 1,
        status: '',
        totalStatus: ''
      })

  }


  
 
  render () {
    return (
        <div className='home'>
          <div className="container">
            <header>
              <div className="logo" onClick={this.checkProfits}>
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
