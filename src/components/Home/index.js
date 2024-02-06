// Write your code here
import {Component} from 'react'

import Message from '../Message'
import Login from '../Login'
import Logout from '../Logout'

import './index.css'

class Home extends Component {
  state = {isLogin: false}

  onClickButton = () => {
    this.setState(prevState => ({isLogin: !prevState.isLogin}))
    console.log('Button clicked')
  }

  render() {
    const {isLogin} = this.state
    const msgText = isLogin ? 'Welcome User' : 'Please Login'
    return (
      <div className="home-container">
        <div className="display-container">
          <Message text={msgText} />
          {isLogin ? (
            <Logout logout={this.onClickButton} />
          ) : (
            <Login login={this.onClickButton} />
          )}
        </div>
      </div>
    )
  }
}

export default Home

// <Message />
//       <Login />
//       <Logout />
