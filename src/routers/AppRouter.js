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
import roles from '../helpers/roles'
import routes from '../helpers/routes'
import EditBooking from '../pages/EditBooking'


export default function AppRouter() {
    return (
        <Router>
            <Layout>
                <Switch>
                    <PublicRoute exact path={routes.home} component={HomePage}></PublicRoute>
                    <PublicRoute exact path={routes.login} component={LoginPage}/>
                    <PrivateRoute exact path={routes.register} component={RegisterPage}/>
                    <PrivateRoute exact path={routes.account} component={AccountPage}/>
                    <PrivateRoute exact path={routes.bookings} component={BookingsPage}/>
                    <PrivateRoute exact path={routes.booking} component={BookingPage}/>
                    <PrivateRoute exact path="/editBooking/:id" component={EditBooking}/>
                    <PrivateRoute hasRole={roles.admin} exact path={routes.admin.users} component={UserPage}/>

                    <Route path="*" component={NotFoundPage}/>
                </Switch>
            </Layout>
        </Router>
    )
}

