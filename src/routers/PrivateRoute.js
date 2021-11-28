import { Redirect,Route } from 'react-router-dom';
import useAuth from '../auth/useAuth';

export default function PrivateRoute({hasRole: role, ...rest}) {
    const {user} = useAuth();
    if(role && user?.role !== role) return <Redirect to="/"/>

    if(!user) return <Redirect to="/login"/>
    return (
        <Route {...rest} />
    )
}
