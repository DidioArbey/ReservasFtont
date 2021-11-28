import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import AccountPage from "../pages/AccountPage"
import BookingPage from "../pages/BookingPage"
import BookingsPage from "../pages/BookingsPage"
import HomePage from "../pages/HomePage"
import LoginPage from "../pages/LoginPage"
import NotFoundPage from "../pages/NotFoundPage"
import RegisterPage from "../pages/RegisterPage"
import UserPage from "../pages/admin/UserPage"
import Layout from '../components/layouts/Layout'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'



export default function AppRouter() {
    return (
        <Router>
            <Layout>
                <Switch>
                    <PublicRoute exact path="/" component={HomePage}></PublicRoute>
                    <PublicRoute exact path="/login" component={LoginPage}/>
                    <PrivateRoute exact path="/register" component={RegisterPage}/>
                    <PrivateRoute exact path="/account" component={AccountPage}/>
                    <PrivateRoute exact path="/bookings" component={BookingsPage}/>
                    <PrivateRoute exact path="/booking/:bookingId" component={BookingPage}/>
                    <PrivateRoute exact path="/admin/:users" component={UserPage}/>

                    <Route path="*" component={NotFoundPage}/>
                </Switch>
            </Layout>
        </Router>
    )
}

