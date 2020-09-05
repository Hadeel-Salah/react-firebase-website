import React from 'react';
import './App.css';
import Posts from './components/Posts'
import Post from './components/Post'
import CreatePost from './components/CreatePost';
import "antd/dist/antd.css";
import "./index.css";
import {Router} from '@reach/router'

function App() {
  return (
    <div className="app_container">
      <Router> 
        <CreatePost default />
        <Posts path='/h'/>
        <Post path="post/:id"/>
      </Router>
    </div>
  );
}

export default App;
