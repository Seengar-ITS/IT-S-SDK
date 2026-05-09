import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './pages/Home.jsx';
import Docs from './pages/Docs.jsx';
import Examples from './pages/Examples.jsx';
import Nav from './components/Nav.jsx';
export default function App(){
  return React.createElement(BrowserRouter,null,
    React.createElement(Nav),
    React.createElement(Routes,null,
    React.createElement(Route,{path:'/',element:React.createElement(Home)}),
    React.createElement(Route,{path:'/docs',element:React.createElement(Docs)}),
    React.createElement(Route,{path:'/examples',element:React.createElement(Examples)})
    )
  );
}
