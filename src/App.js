import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import TicTacToe from "./tic-tac-toe/TicTacToe";
import { NavigationBar } from './components/NavigationBar';
import { Footer } from './components/Footer';
import { Dashboard } from "./components/Dashboard";
import Home from "./Home";
import MyGame from "./magicgame/MyGame";
import RockPS from "./RockPS/RockPS";
import Dice from "./dice/Dice";


function App() {
  return (
    <BrowserRouter>
    <NavigationBar></NavigationBar>
    
     <Dashboard></Dashboard>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/magic" element={<MyGame />}></Route>
        <Route path="/tic" element={<TicTacToe />}></Route>
        <Route path="/rock" element={<RockPS />}></Route>
        <Route path="/dice" element={<Dice />}></Route>
        
      </Routes>
      
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
