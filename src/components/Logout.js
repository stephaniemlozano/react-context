import { useContext } from "react"
import { UserInfoContext } from "../App"

const Logout = () => {
  const {setUser} = useContext(UserInfoContext)
  return (
    <>
      <button onClick={() => setUser({})}>Log Out</button>
    </>
  )
}

export default Logout