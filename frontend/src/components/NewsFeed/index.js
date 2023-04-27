import React from 'react';
import './NewsFeed.css';
import NavBar from './NavBar/NavBar'
import FeedIndex from './FeedIndex/FeedIndex'
import PersonalFeed from './PersonalFeed/PersonalFeed'
import UserContent from './UserContent/UserContent'


export default function NewsFeed() {

  return (
    <>
      <NavBar />
      <div className="news-feed-main-container">
        <FeedIndex />
        <PersonalFeed />
        <UserContent />
      </div>
    </>
  );

};
