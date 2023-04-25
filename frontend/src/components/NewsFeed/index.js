import React from 'react';
import './NewsFeed.css';
import PersonalFeed from './PersonalFeed/PersonalFeed'
import ProfileButton from './ProfileButton/ProfileButton'


export default function NewsFeed() {

  return (
    <>
      <ProfileButton />
      <PersonalFeed />
    </>
  );

};
