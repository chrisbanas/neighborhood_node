import React from "react";
import './UserContent.css';


export default function UserContent() {

  return (
    <>
		<div className="news-feed-user-content">
      <div className="parent-news-feed-create-event-container">
        <div className="child-news-feed-create-event-container">
          <h2 className="news-feed-create-event-container-title">Invite your neighbors to a party, food drive, or meetup</h2>
          <button className="news-feed-create-event-container-button">Create event</button>
        </div>
      </div>
      <div className="parent-news-feed-create-business-container">
        <div className="parent-news-feed-create-business-img-box">
          <div className="child-news-feed-create-business-img-box">
            <img src="https://d19rpgkrjeba2z.cloudfront.net/static/images/offers/blocks-image-open-sign-2.svg"className="news-feed-create-business-img" alt="Neighborhood Node creat a business page"></img>
          </div>
        </div>
        <div className="news-feed-create-business-title-container">
          <h2 className="news-feed-create-business-title">Own a local business?</h2>
          <p className="news-feed-create-business-description">Create a business page to connect with neighbors, post updates in the feed, and gain new customers.</p>
          <button className="news-feed-create-business-button">Create page</button>
        </div>
      </div>
      <div className="parent-news-feed-neighbors-reccomendations-container">
        <div className="child-news-feed-neighbors-reccomendations-container">
          <div className="grandchild-news-feed-neighbors-reccomendations-container">
            <div className="news-feed-neighbors-reccomendations-title-container">
              <h2 className="news-feed-neighbors-reccomendations-title">Neighbors You May Know</h2>
            </div>
          </div>
        </div>
      </div>
		</div>




    </>
  )
}
