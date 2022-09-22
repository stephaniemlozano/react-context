import Login from './Login'
import { useContext } from 'react'
import { UserInfoContext } from '../App'
import Signup from './Signup'
import Logout from './Logout'

const Navbar = () => {
  const { user } = useContext(UserInfoContext)
  
  return (
    <>
      <h3>This is Navbar, Welcome {user?.email}</h3>
      {!user?.email && <Signup />}
      {!user?.email && <Login />}
      {user?.email && <Logout />}
    </>
  )
}

export default Navbar