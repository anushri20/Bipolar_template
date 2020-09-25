import React from 'react';
import logo from './logo.svg';
import './App.css';
import Register from './component/Register';
import NewsFeed from './component/NewsFeed';
import ActivityFeed from './component/ActivityFeed';
import Pagination from './component/Pagination';
import Navigation from './component/Navigation';
import './Bootstrap/dist/css/bootstrap.css';
import './css/main.css';
import './css/fonts.min.css';



function App() {
  return (
    <div>
    
    <NewsFeed />
    <ActivityFeed/>
    <Register />
    <Pagination />
    
    <Navigation/>
    </div>
  );
}

export default App;
