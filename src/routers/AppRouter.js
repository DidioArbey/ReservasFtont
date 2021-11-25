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


export default function AppRouter() {
    return (
        <Router>
            <Layout>
                <Switch>
                    <Route exact path="/" component={HomePage}></Route>
                    <Route exact path="/login" component={LoginPage}/>
                    <Route exact path="/register" component={RegisterPage}/>
                    <Route exact path="/account" component={AccountPage}/>
                    <Route exact path="/bookings" component={BookingsPage}/>
                    <Route exact path="/booking/:bookingId" component={BookingPage}/>
                    <Route exact path="/admin/:users" component={UserPage}/>

                    <Route path="*" component={NotFoundPage}/>
                </Switch>
            </Layout>
        </Router>
    )
}

