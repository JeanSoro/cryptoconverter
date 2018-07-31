import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import Home from './Home';

class Layout extends Component {

  state = {
      name: ''
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
                <a href="#">Register</a>
              </nav>
            </header>
            <Home/>

          </div>
         
        </div>
      )
  }
}

const app = document.getElementById('app')

ReactDOM.render(<Layout />, app)
