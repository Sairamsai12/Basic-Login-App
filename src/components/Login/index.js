// Write your code here
import './index.css'

const Login = props => {
  const {login} = props
  return (
    <button type="submit" className="button" onClick={login}>
      Login
    </button>
  )
}

export default Login
