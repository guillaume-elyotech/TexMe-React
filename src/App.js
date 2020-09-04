import React from 'react';
import Header from './Header';
import Chats from './Chats';
import Chatscreen from './Chatscreen';
import './App.css';
import TinderCard from './TinderCards'
import SwipeButton from './SwipeButton';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";


function App() {
  return (
    <div className="App">
    <h1>TexMe</h1>
    <Router>
    
      <Switch>
        
      <Route path="/chat/:person">
        <Header backButton ="/chat"/>
        <Chatscreen/>
      </Route>

      <Route path="/chat">
        <Header backButton ="/"/>
        <Chats/>
      </Route>

      <Route path="/">
        <Header/>
        <TinderCard/>
        <SwipeButton/>
      </Route>

      </Switch>
    </Router>
      
    </div>
  );
}

export default App;

{/*Header */}
{/*TinderCards */}
      {/*Button tinderCards */}

      {/*ChatScreen */}
      {/*User chatscreen */}