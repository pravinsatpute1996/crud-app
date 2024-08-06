import React from "react";
import { BrowserRouter ,Routes , Route} from 'react-router-dom';
import Home from "./pages/Home";
import Login from "./components/Login";
import Register from "./components/Register"
import Add from "./components/Add"
import Protectroute from "./services/Protectedroute"
import Update from "./components/Update"
import Delete from "./components/Delete"
import Show from "./components/Show";
import Graph from "./components/Graph"

const App =()=>{
  return( 
  <>
  <BrowserRouter>
  <Routes>
  <Route path="/register" element={<Register/>}> </Route>
  <Route path="/addnew" element={<Add/>}> </Route>
  <Route path="/update/:id" element={<Update/>} > </Route>
  <Route path="/graph" element={<Graph/>} > </Route>

  <Route path="/delete" element={<Delete/>} > </Route>
  <Route path="/showmore/:id" element={<Show/>} > </Route>

   <Route path="/" element={<Protectroute/>}> 
    <Route path="/" element={<Home/>} /></Route>
    <Route path="/login" element={<Login/>} />
  </Routes>
  </BrowserRouter>
  </>
  )
}

export default App