import React from 'react';
import ProfileNavBar from './ProfileNavBar/ProfileNavBar';
import ProfileIndex from './ProfileIndex/ProfileIndex';
import ProfileFeed from './ProfileFeed/ProfileFeed';
import './Profile.css';

export default function Profile() {

  return (

    <>
      <ProfileNavBar/>
      <ProfileIndex/>
      <ProfileFeed/>
    </>

  )

}
