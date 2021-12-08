import React from 'react'

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import AccountPage from "../pages/AccountPage"
import BookingPage from "../pages/BookingPage"
import BookingsPage from "../pages/BookingsPage"
import HomePage from "../pages/HomePage"
import LoginPage from "../pages/LoginPage"
import NotFoundPage from "../pages/NotFoundPage"
import RegisterPage from "../pages/RegisterPage"
import Layout from '../components/layouts/Layout'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

import routes from '../helpers/routes'
import EditBooking from '../pages/EditBooking'
import  UsersPage  from '../pages/UsersPage'


export default function AppRouter() {
    return (
        <Router>
            <Layout>
                <Switch>
                    <PublicRoute exact path={routes.home} component={HomePage}></PublicRoute>
                    <PublicRoute exact path={routes.login} component={LoginPage}/>
                    <PublicRoute exact path={routes.register} component={RegisterPage}/>
                    <PrivateRoute exact path={routes.account} component={AccountPage}/>
                    <PrivateRoute exact path={routes.bookings} component={BookingsPage}/>
                    <PrivateRoute exact path={routes.booking} component={BookingPage}/>
                    <PrivateRoute exact path={routes.users} component={UsersPage}/>
                    <PrivateRoute exact path="/editBooking/:id" component={EditBooking}/>


                    <Route path="*" component={NotFoundPage}/>
                </Switch>
            </Layout>
        </Router>
    )
}

