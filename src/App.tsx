import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Courses from './routes/courses/Courses';

export default function App() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/courses">
                    <Courses />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}
