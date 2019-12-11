import React from "react"
import {BrowserRouter,Switch,Route} from "react-router-dom"
import Header from './Components/Header'
import NavBar from './Components/NavBar'
import Home from './Components/Home'
import About from './Components/About'
import Messages from './Components/Messages'
import Signup from './Components/Signup'

const App = () =>{
    return(
        <div>
            <Header />
            <NavBar />
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={Home} exact/>
                    <Route path="/about" component={About}/>
                    <Route path="/messages" component={Messages}/>
                    <Route path="/signup" component={Signup}/>
                </Switch>
            </BrowserRouter>
        </div>
    )
}


export default App 