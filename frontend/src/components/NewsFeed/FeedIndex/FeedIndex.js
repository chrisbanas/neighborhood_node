import React from "react";
import './FeedIndex.css';

import github from '../../../assets/github.png'
import linkedin from '../../../assets/linkedin.png'

export default function FeedIndex() {



  return (

    <>
      <div className="news-feed-index">
        <div className="news-feed-index-list">
          <li className="news-feed-index-list-item">
            <a className="news-feed-index-list-item-container" href="/news_feed">
              <svg className="news-feed-index-list-item-icon">
                <path fill="currentColor" d="M16.669 4.257a1 1 0 0 0-1.338 0l-10 9A1 1 0 0 0 5 14v12a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6h6v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V14a1 1 0 0 0-.331-.743l-10-9Z">
                </path>
              </svg>
              <span className="news-feed-index-list-item-title" data-testid="Home">Home</span>
            </a>
          </li>
          <li className="news-feed-index-list-item">
            <a className="news-feed-index-list-item-container" href="/news_feed">
              <svg className="news-feed-index-list-item-icon" role="img">
                <path fill="currentColor" fillRule="evenodd" d="M12.13 11.974a.2.2 0 0 0-.156.157l-1.915 9.575a.2.2 0 0 0 .235.235l9.575-1.915a.2.2 0 0 0 .157-.157l1.915-9.575a.2.2 0 0 0-.235-.235l-9.575 1.915ZM13.7 13.7l-1.15 5.75 5.75-1.15-4.6-4.6Z" clipRule="evenodd">
                </path>
                <path fill="currentColor" fillRule="evenodd" d="M16 28c6.627 0 12-5.373 12-12S22.627 4 16 4 4 9.373 4 16s5.373 12 12 12Zm0-2c5.523 0 10-4.477 10-10S21.523 6 16 6 6 10.477 6 16s4.477 10 10 10Z" clipRule="evenodd">
                </path>
              </svg>
              <span className="news-feed-index-list-item-title" data-testid="Discover">Discover</span>
            </a>
          </li>
          <li className="news-feed-index-list-item">
            <a className="news-feed-index-list-item-container" href="/news_feed">
              <svg className="news-feed-index-list-item-icon" role="img">
                <path fill="currentColor" fillRule="evenodd" d="m19.3 6.9 9 9c1.2 1.1 1.2 3.1 0 4.1l-8.2 8.2c-.6.6-1.4.9-2.1.9-.7 0-1.5-.3-2.1-.9l-7.021-7.021-2.03-1.912C6.283 18.702 6 17.995 6 17.147v-5.04c-.067-.057-.133-.107-.2-.157-.1-.075-.2-.15-.3-.25-1.8-1.9-2.05-4.81-.35-6.51 1.5-1.5 3.95-1.58 5.75-.28-.5.2-.9.49-1.3.89l-.4.4c-.9-.4-1.9-.3-2.6.4-.9.9-.8 2.5.2 3.6 1.3 1.2 3.1 1.9 4.6 2.3.6-.9 1.6-1.5 2.8-1.5 1.8 0 3.2 1.6 3.2 3.3 0 1.7-1.4 3.2-3.2 3.2-1.7 0-3.1-1.3-3.2-3-.9-.2-2-.6-3-1.1V17.2c0 .04.002.082.006.128.026.262.142.566.327.75l.024.027L17.2 26.9c.4.4 1 .4 1.4 0l8.2-8.2c.4-.4.4-1 0-1.4l-9-9c-.2-.2-.4-.3-.7-.3h-4.3c-.2 0-.5.1-.7.3l-2.2 2.2c-.6-.3-1.2-.7-1.7-1.1l2.6-2.5c.5-.6 1.3-.9 2.1-.9h4.3c.8 0 1.5.3 2.1.9ZM13.375 15a1.125 1.125 0 0 0 .719-1.99 1.25 1.25 0 1 1-.85 1.983c.043.004.087.007.131.007Z" clipRule="evenodd">
                </path>
              </svg>
              <span className="news-feed-index-list-item-title" data-testid="For Sale &amp; Free">For Sale &amp; Free
              </span>
            </a>
          </li>
          <li className="news-feed-index-list-item">
            <a className="news-feed-index-list-item-container" href="/news_feed">
              <svg className="news-feed-index-list-item-icon" viewBox="0 0 32 32" role="img">
                <path fill="currentColor" fillRule="evenodd" d="M16 3.5c-2.071 0-4 1.657-4 3.85v.004C9.167 8.774 7.5 11.68 7.5 15v3.197l-2.832 4.248A1 1 0 0 0 5.5 24H12c0 2.212 1.788 4 4 4 2.212 0 4-1.788 4-4h6.5a1 1 0 0 0 .832-1.555L24.5 18.197V15c0-3.32-1.667-6.225-4.5-7.646V7.35c0-2.193-1.929-3.85-4-3.85ZM18 24h-4c0 1.108.892 2 2 2s2-.892 2-2Zm6.631-2-1.963-2.945a1 1 0 0 1-.168-.555V15c0-2.825-1.491-5.118-3.872-6.072A1 1 0 0 1 18 8v-.65c0-.961-.902-1.85-2-1.85-1.098 0-2 .889-2 1.85V8a1 1 0 0 1-.628.928C10.992 9.882 9.5 12.175 9.5 15v3.5a1 1 0 0 1-.168.555L7.37 22H24.63Z" clipRule="evenodd"></path>
              </svg>
              <span className="news-feed-index-list-item-title" data-testid="Notifications">Notifications</span>
            </a>
          </li>
          <li className="news-feed-index-list-item">
            <a className="news-feed-index-list-item-container" href="/news_feed">
              <svg className="news-feed-index-list-item-icon" viewBox="0 0 32 32" role="img">
                <path fill="currentColor" d="M17.328 25.23C18.623 26.48 20.401 28 23 28a1 1 0 0 0 .896-1.443v-.001l-.009-.019a4.48 4.48 0 0 1-.181-.488 4.766 4.766 0 0 1-.175-.81c1.184-.881 2.444-2.027 3.455-3.37C28.126 20.358 29 18.525 29 16.5a8.37 8.37 0 0 0-1.071-4.15c.047.426.071.859.071 1.297 0 3.778-1.893 7.132-4.75 9.26-.441.377-.89.72-1.323 1.024a1 1 0 0 0-.427.819c0 .365.035.71.088 1.02-.67-.224-1.264-.6-1.832-1.056-.78.254-1.593.429-2.428.516Z">
                </path>
                <path fill="currentColor" fillRule="evenodd" d="M3 13.647A9.64 9.64 0 0 1 12.647 4h3.706A9.64 9.64 0 0 1 26 13.647a9.64 9.64 0 0 1-9.465 9.645C14.77 25.542 12.035 27 8.941 27a1 1 0 0 1-.895-1.447l.002-.002.007-.016.034-.07a12.128 12.128 0 0 0 .491-1.229c.193-.576.34-1.173.374-1.683A9.628 9.628 0 0 1 3 13.647Zm7.486 11.196a7.675 7.675 0 0 0 4.727-3.123 1 1 0 0 1 .819-.426h.32A7.64 7.64 0 0 0 24 13.647 7.64 7.64 0 0 0 16.353 6h-3.706A7.64 7.64 0 0 0 5 13.647a7.63 7.63 0 0 0 5.243 7.253 1 1 0 0 1 .676.804c.158 1.076-.15 2.29-.433 3.14Z" clipRule="evenodd">
                </path>
              </svg>
              <span className="news-feed-index-list-item-title" data-testid="Messages">Messages</span>
            </a>
          </li>
          <div className="news-feed-index-post-button-container">
            <button className="news-feed-index-post-button">
              <span className="news-feed-index-post-button-content">
                <svg className="news-feed-index-post-button-symbol" viewBox="0 0 24 24" role="img">
                  <path fill="currentColor" d="M13 4a1 1 0 1 0-2 0v7H4a1 1 0 1 0 0 2h7v7a1 1 0 1 0 2 0v-7h7a1 1 0 1 0 0-2h-7V4Z">
                  </path>
                </svg>Post
              </span>
            </button>
          </div>
        </div>



        {/* Index footer */}
        <div className="news-feed-index-footer-menue-container">
          <footer className="news-feed-index-footer" tabIndex="0" aria-label="Footer">
            <ul className="news-feed-index-footer-ul">
              <li>
                <a className="news-feed-index-footer-li" href="/news_feed" target="_blank">Help&nbsp;&bull;&nbsp;</a>
              </li>
              <li>
                <a className="news-feed-index-footer-li" href="/news_feed">Guidelines&nbsp;&bull;&nbsp;</a>
              </li>
              <li>
                <a className="news-feed-index-footer-li" href="/news_feed" target="_blank">Legal&nbsp;&bull;&nbsp;</a>
              </li>
              <li>
                <a className="news-feed-index-footer-li" href="/news_feed">Privacy</a>
              </li>
            </ul>
            <ul className="news-feed-index-footer-ul">
              <li>
                <a className="news-feed-index-footer-li" href="/news_feed">About&nbsp;&bull;&nbsp;</a>
              </li>
              <li>
                <a className="news-feed-index-footer-li" href="/news_feed">Jobs&nbsp;&bull;&nbsp;</a>
              </li>
              <li>
                <a className="news-feed-index-footer-li" href="/news_feed">Press&nbsp;&bull;&nbsp;</a>
              </li>
              <li>
                <a className="news-feed-index-footer-li" href="/news_feed">Blog</a>
              </li>
            </ul>
            <ul className="news-feed-index-footer-ul">
              <li>
                <a className="news-feed-index-footer-li" href="/news_feed">Do Not Sell or Share My Personal Information&nbsp;&bull;&nbsp;
                </a>
              </li>
              <li>
                <a className="news-feed-index-footer-li" href="/news_feed">Limit the Use of My Sensitive Personal Information
                </a>
              </li>
            </ul>
            <div className="news-feed-index-copyright-container">
              <div className="news-feed-footer-copyright">© 2023 Neighborhood Node</div>
              <div className="linkedin-logo">
                <a href="https://www.linkedin.com/in/christopher-banas/" className="news-feed-nav-bar-linkedin-logo">
                  <img src={linkedin} className="new-feed-neighborhood-node-likedin-logo" alt="LinkedIn logo" />
                </a>
              </div>
              <div className="github-logo">
                <a href="https://github.com/chrisbanas/neighborhood_node" className="news-feed-nav-bar-github-logo">
                  <img src={github} className="new-feed-neighborhood-node-github-logo" alt="Github logo" />
                </a>
              </div>
            </div>
          </footer>
        </div>
      </div>



    </>


  )

}
