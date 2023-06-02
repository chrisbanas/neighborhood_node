import React from "react";
import './UserContent.css';


export default function UserContent() {

  return (
    <>
      <div className="news-feed-user-content">
        <div className="parent-news-feed-create-event-container">
          <div className="child-news-feed-create-event-container">
            <h2 className="news-feed-create-event-container-title">Invite your neighbors to a party, food drive, or meetup</h2>
            {/* <button className="news-feed-create-event-container-button">Create event</button> */}
          </div>
        </div>
        <div className="parent-news-feed-create-business-container">
          <div className="parent-news-feed-create-business-img-box">
            <div className="child-news-feed-create-business-img-box">
              <img src="https://d19rpgkrjeba2z.cloudfront.net/static/images/offers/blocks-image-open-sign-2.svg" className="news-feed-create-business-img" alt="Neighborhood Node creat a business page"></img>
            </div>
          </div>
          <div className="news-feed-create-business-title-container">
            <h2 className="news-feed-create-business-title">Own a local business?</h2>
            <p className="news-feed-create-business-description">Create a business page to connect with neighbors, post updates in the feed, and gain new customers.</p>
            {/* <button className="news-feed-create-business-button">Create page</button> */}
          </div>
        </div>
        <div className="parent-news-feed-neighbors-reccomendations-container">
          <div className="child-news-feed-neighbors-reccomendations-container">
            <div className="grandchild-news-feed-neighbors-reccomendations-container">
              <div className="news-feed-neighbors-reccomendations-title-container">
                <h2 className="news-feed-neighbors-reccomendations-title">Neighbors You May Know</h2>
              </div>

              {/* Neighbor 1 */}
              <div className="parent-single-neighbor-reccomendation-container">
                <div className="child-single-neighbor-reccomendation-container">
                  <div className="single-neighbor-reccomendation-avatar-container">

                      <img className="single-neighbor-reccomendation-avatar"
                        src="https://d19rpgkrjeba2z.cloudfront.net/67d1cbcd8400bb59/static/nextdoorv2/images/avatars/color-24/e.png" alt="profile" />

                  </div>
                  <div className="parent-single-neighbor-reccomendation-info-container">
                    <div className="child-single-neighbor-reccomendation-info-container">
                      <div className="single-neighbor-reccomendation-name-container">

                          <h2 className="single-neighbor-reccomendation-name">Em G.</h2>

                      </div>
                      <div className="single-neighbor-reccomendation-neighborhood-container">
                        <svg className="single-neighbor-reccomendation-neighborhood-icon" width="16" height="16" fill="none" viewBox="0 0 24 24">
                          <path fill="currentColor"
                            d="M12.707 4.293a1 1 0 0 0-1.414 0l-6 6A1 1 0 0 0 5 11v8a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-5h4v5a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-8a1 1 0 0 0-.293-.707l-6-6Z">
                          </path>
                        </svg>
                        <div className="single-neighbor-reccomendation-neighborhood-text">
                          <span>Marina</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="single-neighbor-reccomendation-button-container">
                    {/* <button className="single-neighbor-reccomendation-button">Message</button> */}
                  </div>
                </div>
              </div>

              {/* Neighbor 2 */}
              <div className="parent-single-neighbor-reccomendation-container">
                <div className="child-single-neighbor-reccomendation-container">
                  <div className="single-neighbor-reccomendation-avatar-container">

                      <img className="single-neighbor-reccomendation-avatar"
                        src="https://d19rpgkrjeba2z.cloudfront.net/ef463cfd00bd71be/static/nextdoorv2/images/avatars/color-11/s.png" alt="profile" />

                  </div>
                  <div className="parent-single-neighbor-reccomendation-info-container">
                    <div className="child-single-neighbor-reccomendation-info-container">
                      <div className="single-neighbor-reccomendation-name-container">

                          <h2 className="single-neighbor-reccomendation-name">Sam P.</h2>

                      </div>
                      <div className="single-neighbor-reccomendation-neighborhood-container">
                        <svg className="single-neighbor-reccomendation-neighborhood-icon" width="16" height="16" fill="none" viewBox="0 0 24 24">
                          <path fill="currentColor"
                            d="M12.707 4.293a1 1 0 0 0-1.414 0l-6 6A1 1 0 0 0 5 11v8a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-5h4v5a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-8a1 1 0 0 0-.293-.707l-6-6Z">
                          </path>
                        </svg>
                        <div className="single-neighbor-reccomendation-neighborhood-text">
                          <span>Pacifica</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="single-neighbor-reccomendation-button-container">
                    {/* <button className="single-neighbor-reccomendation-button">Message</button> */}
                  </div>
                </div>
              </div>

              {/* Neighbor 3 */}
              <div className="parent-single-neighbor-reccomendation-container">
                <div className="child-single-neighbor-reccomendation-container">
                  <div className="single-neighbor-reccomendation-avatar-container">

                      <img className="single-neighbor-reccomendation-avatar"
                        src="https://d19rpgkrjeba2z.cloudfront.net/ef463cfd00bd71be/static/nextdoorv2/images/avatars/color-10/j.png" alt="profile" />

                  </div>
                  <div className="parent-single-neighbor-reccomendation-info-container">
                    <div className="child-single-neighbor-reccomendation-info-container">
                      <div className="single-neighbor-reccomendation-name-container">

                          <h2 className="single-neighbor-reccomendation-name">Joe D.</h2>

                      </div>
                      <div className="single-neighbor-reccomendation-neighborhood-container">
                        <svg className="single-neighbor-reccomendation-neighborhood-icon" width="16" height="16" fill="none" viewBox="0 0 24 24">
                          <path fill="currentColor"
                            d="M12.707 4.293a1 1 0 0 0-1.414 0l-6 6A1 1 0 0 0 5 11v8a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-5h4v5a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-8a1 1 0 0 0-.293-.707l-6-6Z">
                          </path>
                        </svg>
                        <div className="single-neighbor-reccomendation-neighborhood-text">
                          <span>Mission</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="single-neighbor-reccomendation-button-container">
                    {/* <button className="single-neighbor-reccomendation-button">Message</button> */}
                  </div>
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>




    </>
  )
}
