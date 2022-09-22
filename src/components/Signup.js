import { useContext } from "react"
import { UserInfoContext } from "../App"

const Signup = () => {
  const {setUser} = useContext(UserInfoContext)

  const userInfo = {email: 'steph@gmail.com', password: 'supersecure82'}
  return (
    <>
      <button onClick={() => setUser(userInfo)}>Sign Up</button>
    </>
  )
}

export default Signup