import EmployeeList from './components/EmployeeList';
import EmployeeContextProvider from './contexts/EmployeeContext';
import Login from './components/Login'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
function App() {
  return (
    <div className="container-xl">
      {/* 
      <Router>
        <Switch>
          <Route exact={true} path="/" component={Login} />
        </Switch>
      </Router> */}
      <div className="table-responsive">
        <div className="table-wrapper">
          <EmployeeContextProvider>
            <Router>
              <Switch>
                <Route exact={true} path="/" component={Login} />
                <Route path="/dashboard" component={EmployeeList} />
              </Switch>
            </Router>
          </EmployeeContextProvider>
        </div>
      </div>
    </div>

  );
}

export default App;
