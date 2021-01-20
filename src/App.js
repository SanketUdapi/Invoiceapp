import About from './pages/about/about'
import Mainpage from './pages/mainpage/mainpage'
import { HashRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import Invoices from './pages/invoices/invoices';

function App() {
  return (
    <Router>
      <Switch>
      <Route exact path='/' component={Mainpage}></Route>
      <Route exact path='/home' component={Mainpage}></Route>
        <Route exact path='/form' component={Mainpage}></Route>
        <Route exact path='/invoices' component={Invoices}></Route>
        <Route exact path='/about' component={About}></Route>
        <Route exact path="/github" render={() => (window.location = "https://github.com/SanketUdapi/Invoiceapp")} />
      </Switch>
    </Router>
  );
}

export default App;
