import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Redirect,
    Route
  } from "react-router-dom";
  
import { WebAppScreen } from '../components/webapp/WebAppScreen'
import { AuthRouter } from './AuthRouter'

export const AppRouter = () => {
    return (
        <Router> 
            <div>
                <Switch>
                    <Route 
                        path="/auth"
                        component={AuthRouter}
                    />
                    <Route 
                        exact path="/"
                        component={WebAppScreen}
                    />

                    <Redirect to="/auth/login" />                  
                </Switch>
            </div>
        </Router>
    )
}
