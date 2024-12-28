import './App.css';
import { Component } from 'react';
import Home from "./Components/Home"
import context from './context/context';
import ProtectedRoute from "./Components/ProtectedRoute"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './Components/LoginForm';

const Featured_Categories = [
  {
    "id": "63c23fc4e28fcb001c34d001",
    "name": "Vegetables",
    "image": "https://coderthemes.com/wb/greencart/assets/vegetables-82b6f3ef.png"
  },
  {
    "id": "63c23fc4e28fcb001c34d002",
    "name": "Fruits",
    "image": "https://coderthemes.com/wb/greencart/assets/fruit-59cd8491.png"
  },
  {
    "id": "63c23fc4e28fcb001c34d003",
    "name": "Meat",
    "image": "https://coderthemes.com/wb/greencart/assets/meat-b2e377dd.png"
  },
  {
    "id": "63c23fc4e28fcb001c34d004",
    "name": "Sea Food",
    "image": "https://coderthemes.com/wb/greencart/assets/sea-food-86ecb0e4.png"
  },
  {
    "id": "63c23fc4e28fcb001c34d005",
    "name": "Eggs",
    "image": "https://coderthemes.com/wb/greencart/assets/eggs-56f66d58.png"
  },
  {
    "id": "63c23fc4e28fcb001c34d006",
    "name": "Baking",
    "image": "https://coderthemes.com/wb/greencart/assets/baking-120dfda7.png"
  },
  {
    "id": "63c23fc4e28fcb001c34d007",
    "name": "Drinks",
    "image": "https://coderthemes.com/wb/greencart/assets/drinks-d6f4f1cf.png"
  },
  {
    "id": "63c23fc4e28fcb001c34d008",
    "name": "Milk",
    "image": "https://coderthemes.com/wb/greencart/assets/milk-d6894ce7.png"
  },
  {
    "id": "63c23fc4e28fcb001c34d009",
    "name": "Cheese",
    "image": "https://coderthemes.com/wb/greencart/assets/cheese-9f2bd06a.png"
  }
]

class App extends Component{
  state={
    cartList:[],
    Featuredcategories:Featured_Categories,
  }

  render(){
    const {cartList, Featuredcategories}  = this.state

    return(
      <context.Provider
      value={{
        cartList,Featuredcategories
      }}
      >
         <Router>
      <Routes>
        <Route path="/login" element={< LoginForm/>} />
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </Router>
      </context.Provider>
    )
  }
}


export default App