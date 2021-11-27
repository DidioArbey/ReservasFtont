import { Redirect,Route } from 'react-router-dom';
import useAuth from '../auth/useAuth';

export default function PrivateRoute(props) {
    // const user = null;
    // if(!user) return <Redirect to="/login"/>
    const {user} = useAuth();
    return (
        <Route {...props} />
    )
}
