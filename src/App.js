import { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import Header from "./components/Home/Header/Header";
import Home from "./components/Home/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import Login from "./components/Login/Login";
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import AddBlog from './components/Dashboard/Admin/AddBlog/AddBlog';
import MakeAdmin from './components/Dashboard/Admin/MakeAdmin/MakeAdmin';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import BlogContent from './components/Home/BlogContent/BlogContent';
import ManageBlog from './components/Dashboard/Admin/ManageBlog/ManageBlog';


export const UserContext = createContext();

function App() {
  
  const [loggedInUser, setLoggedInUser] = useState({});
  
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/header">
            <Header></Header>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/blogContent/:id">
            <BlogContent></BlogContent>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <Route path="/manageBlog">
            <ManageBlog></ManageBlog>
          </Route>
          <Route path="/addBlog">
            <AddBlog></AddBlog>
          </Route>
          <Route path="/makeAdmin">
            <MakeAdmin></MakeAdmin>
          </Route>
           <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
