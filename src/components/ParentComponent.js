// ParentComponent.js
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './Home';
import StudentData from './StudentData';
import Login from './Login'; // Import your Login component

const ParentComponent = () => {
  const [isLoggedIn, setLoggedIn] = React.useState(true); // Assuming you have some state indicating login status

  const handleLogout = () => {
    // Perform any additional logout logic, such as clearing tokens or user data
    // For simplicity, here we'll just set isLoggedIn to false
    setLoggedIn(false);
  };

  return (
    <div>
      {/* Your other routes */}
      <Switch>
        <Route path="/student-data" component={StudentData} />
        {/* Add more routes as needed */}
      </Switch>

      {/* Home route */}
      <Route
        exact
        path="/"
        render={() =>
          isLoggedIn ? (
            <Home onLogout={handleLogout} />
          ) : (
            // Redirect to the login page if not logged in
            <Redirect to="/login" />
          )
        }
      />

      {/* Add a route for the Login component */}
      <Route path="/login" component={() => <Login onLogin={() => setLoggedIn(true)} />} />
    </div>
  );
};

export default ParentComponent;
