import "./App.css";
import { createBrowserHistory } from "history";
import { Router } from "react-router";
import { HomeTemplate } from "./templates/HomeTemplate/HomeTemplate";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import News from "./pages/News/News";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Detail from "./pages/Detail/Detail";
import Checkout from "./pages/Checkout/Checkout";
import Profile from "./pages/Profile/Profile";
// import { Suspense, lazy } from 'react'
import CheckoutTemplate from "./templates/CheckoutTemplate/CheckoutTemplate";
import { UserTemplate } from "./templates/UserTemplate/UserTemplate";
import Loading from "./components/Loading/Loading";
import Dashboard from './pages/Admin/Dashboard/Dashboard';
import AdminTemplate from './templates/AdminTemplate/AdminTemplate';
import Films from './pages/Admin/Films/Films';
import ShowTime from './pages/Admin/Showtime/ShowTime';
import AddNew from './pages/Admin/Films/AddNew/AddNew';
import Edit from './pages/Admin/Films/Edit/Edit';

// const CheckoutTemplateLazy = lazy(() => import('./templates/CheckoutTemplate/CheckoutTemplate'))

export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Loading />
      <Switch>
        <HomeTemplate path="/home" exact Component={Home} />
        <HomeTemplate path="/contact" exact Component={Contact} />
        <HomeTemplate path="/news" exact Component={News} />
        <HomeTemplate path="/detail/:id" exact Component={Detail} />
        <HomeTemplate path="/profile" exact Component={Profile} />

        <CheckoutTemplate path="/checkout/:id" exact component={Checkout} />

        <UserTemplate path="/register" exact Component={Register} />
        <UserTemplate path="/login" exact Component={Login} />

        <AdminTemplate path="/admin" exact Component={Dashboard} />
        <AdminTemplate path="/admin/films" exact Component={Films} />
        <AdminTemplate path="/admin/films/addnew" exact Component={AddNew} />
        <AdminTemplate path="/admin/films/edit/:id" exact Component={Edit} />
        <AdminTemplate path="/admin/films/showtime/:id/:tenphim" exact Component={ShowTime} />

        <AdminTemplate path="/admin/users" exact Component={Dashboard} />

        {/* <Suspense fallback={<h1>...Loading</h1>}>
          <CheckoutTemplateLazy path="/checkout/:id" exact Component={Checkout} />
        </Suspense> */}
        <HomeTemplate path="/" exact Component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
