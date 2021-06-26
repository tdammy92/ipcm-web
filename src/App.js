import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { createMuiTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import NavBar from './components/partials/NavBar/NavBar';
// import Footer from './components/partials/Footer/Footer'
import Home from './components/Home'
import About from "./components/Pages/About";
import Contact from "./components/Pages/Contact";
import Member from "./components/Pages/Member";
import Examination from "./components/Pages/Examination";
import Certification from "./components/Pages/Certification";
import Register from "./components/Pages/Register";



const defualtTheme = createMuiTheme({
  palette:{
    primary:{
     main: "#01996D",
    },
    secondary:{
     main: "#fff",
    }
  }

})


function App() {
  return (
    <ThemeProvider theme={defualtTheme}>
    <div className="index">
    
       <Router>

              <NavBar/>

                    <Switch>

                    <Route exact path='/'>

                        <Home/>

                    </Route>
                    <Route exact path='/about'>

                        <About/>

                    </Route>
                    <Route exact path='/contact'>

                        <Contact/>

                    </Route>
                    <Route exact path='/member'>

                        <Member/>

                    </Route>
                    <Route exact path='/examination'>

                        <Examination/>

                    </Route>
                    <Route exact path='/certification'>

                        <Certification/>

                    </Route>
                    <Route exact path='/register'>

                        <Register/>

                    </Route>



                    </Switch>
              {/* <Footer/> */}
          </Router>
         
    </div>
    </ThemeProvider>
  );
}

export default App;
