import { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import {UserContext} from "../context/UserContext"

const PrivateRoute = ({component: Component, ...rest}) => {
    const {user} = useContext(UserContext)
    return ( 
        <Route {...rest} render={props => (
            user.user_id ? (
                <Component {...props} />
            ): <Redirect to="/login" />
        )} />
     );
}
 
export default PrivateRoute;