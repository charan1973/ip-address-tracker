import { useContext, useEffect, useState } from "react"
import "./Login.page.css"
import Sawo from "sawo";
import { createUser } from "../../helper";
import { UserContext } from "../../context/UserContext";

const Login = ({history}) => {
  const {user, userDispatch} = useContext(UserContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const sawoConfig = {
      containerID: "sawo-container",
      identifierType: "phone_number_sms",
      apiKey: process.env.REACT_APP_SAWO_API,
      onSuccess: onSuccessLogin
    };

    
    let sawo = new Sawo(sawoConfig)
    sawo.showForm();
  }, [])

  const onSuccessLogin = async(payload) => {
    setLoading(true);

    createUser(payload)
    .then(data => {
        if(data.success){
            setTimeout(() => {
                history.push("/")
                setLoading(false)
            }, 1000)
        }
    })

    userDispatch(payload)
  }

    return (
        <div className="login-page">
            <div id="sawo-container" style={{height: "300px", width: "300px"}}></div>
            {
              loading && <div className="loader" />
            }
        </div>
    )
}

export default Login