import { Component } from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import context from "./context/context"
import Home from "./Components/Home"
import LoginForm from "./Components/LoginForm"
import ProtectedRoute from "./Components/ProtectedRoute"
import "./App.css"

class App extends Component{
  state={
    cartList:[]
  }
  
  render(){
    const {cartList} = this.state
    return(
      <context.Provider
      value={{cartList}}
      >
        <Router>
        <Routes>
        <Route exact path="/login" element={<LoginForm/>} />
        <Route element={<ProtectedRoute/>}>
          <Route path="/" element={<Home/>}/>
        </Route>
        </Routes>
        </Router>
      </context.Provider>
    )
  }


}

export default App