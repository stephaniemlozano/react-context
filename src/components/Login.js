import { useContext } from "react"
import { UserInfoContext } from "../App"


const Login = () => {
  const {user, setUser} = useContext(UserInfoContext)
  const userInfo = {email: 'steph@gmail.com', password: 'supersecure82'}

  console.log('this is context,', user)

  return (
    <>
      <button onClick={() => setUser(userInfo)}>Log In</button>
    </>
  )
}

export default Login