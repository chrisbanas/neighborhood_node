import React from 'react';
import './NotFound.css';

export default function NotFound() {

  return (

    <>
      <head>
        <title>The page you were looking for doesn't exist (404)</title>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <style>
        </style>
      </head>

      <body class="rails-default-error-page">
        <div class="dialog">
          <div>
            <h1>The page you were looking for doesn't exist.</h1>
            <p>You may have mistyped the address or the page may have moved.</p>
          </div>
          <p>If you are the application owner check the logs for more information.</p>
        </div>
      </body>
    </>

  )

}
