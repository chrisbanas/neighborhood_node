<div style="text-align:center">
    <a href="https://www.neighborhoodnode.com/">
        <img src="./app/assets/images/neighborhood_node_text_logo.png" alt="logo">
    </a>
</div>

<div style="text-align:center">
    <figure>
        <a href="https://www.neighborhoodnode.com/">
            <img src="./app/assets/images/header.jpg" alt="hero">
        </a>
        <figcaption>Image from Hill Street Studios/Getty Images</figcaption>
    </figure>
</div>



Neighborhood Node, a Nextdoor clone, is a private social networking platform for neighborhoods. It allows residents of a specific neighborhood to connect and communicate with each other, sharing local news, events, recommendations, and concerns. Built on a foundation of Ruby on Rails, Node, and React/Redux, this application utilizes industry-leading technologies such as AWS S3 Buckets, Google Maps API, and bcrypt to provide a seamless user experience that prioritizes privacy and security. With features such as neighborhood-specific news feeds, post/comment/like functionality, and multiple neighborhood options for users to choose from, Neighborhood Node provides a powerful and engaging tool for fostering local connections and promoting small businesses. Join us today and become a part of the Neighborhood Node community!

----------

## Technologies:

### User Auth
- Neighborhood Node's user authentication system has been implemented encrypting passwords using bcrypt, a well-known and trusted hashing algorithm that makes it extremely difficult for anyone to reverse-engineer passwords even if they gained access to the database. Furthermore, the application uses a secure token-based authentication system to ensure that user credentials are not vulnerable to interception or replay attacks. This provides a secure, seamless, and user-friendly experience for anyone using the application.

### Frontend
- Node and Webpack React/Redux frontend

### Backend
- Ruby on Rails backend RESTful API that uses PostgreSQL as its database management system.

### Hosting / Domain
- Heroku
- Google Domains

### API's
- **AWS S3 Buckets:** Neighborhood Node utilizes AWS S3 Buckets to provide secure and scalable storage for all types of multimedia assets, including images, videos, and other files.

- **Google Maps API:** Neighborhood Node leverages the power of the Google Maps API to provide location-based services for our users.

----------

## Features:

- **Signup:** Users can sign up for Neighborhood Node by providing their name, email, and a password. After signing up, they are prompted to select one of three available neighborhoods to join.

- **Logout:** Users can logout of their account at any time, which will immediately end their session and ensure that their data is secure.

- **Neighborhoods:** Neighborhood Node offers three different neighborhoods that users can choose to join. Each neighborhood has its own news feed and user base, allowing users to interact with and get to know their neighbors in a more targeted and personal way.

- **News Feed:** Each neighborhood has its own news feed, which displays posts, comments, and likes from other users in that neighborhood. Users can scroll through the news feed to stay up-to-date on the latest happenings in their community.

- **Posts:** Users can create new posts in their neighborhood's news feed to share information, ask for recommendations, or start a discussion. Posts can include text, images, or videos, making it easy to share and consume all types of content.

- **Comments:** Users can comment on posts made by other users in their neighborhood's news feed. This allows for a more interactive and engaging experience, as users can share their thoughts, ask questions, or provide additional information on any given post.

- **Likes:** Users can like posts and comments made by other users in their neighborhood's news feed. This helps to surface the most popular and relevant content, and provides positive feedback to users who are sharing valuable information.

---------

## Polymorphic table for likes

Implementing a polymorphic table for likes presented the challenge of reducing the amount of data that needs to be stored and queried, as well as minimizing the number of database queries required to retrieve likes for a particular object. The solution was to create a single Likes table that can be used across multiple other tables, rather than having separate tables for each type of object that can be liked. This approach simplifies the database schema and improves performance and scalability. Additionally, this approach enables easily adding new objects that can be liked without needing to create a new table every time.

---------

## RESTful backend API routes

Implementing RESTful backend routes provided a standardized and predictable way to handle requests and responses. The challenge was to ensure that the backend routes adhered to the RESTful principles, with clear and consistent naming conventions and standardized response formats. The solution was to utilize a range of HTTP methods, including GET, POST, PUT, and DELETE, to support a wide range of resource creation, reading, updating, and deletion.

---------

## Third-Party APIs

Incorporating third-party APIs like AWS S3 buckets and Google Maps API into a full-stack application can be challenging, but it can also provide a more intuitive and useful user experience. Neighborhood Node is a great example of this, as it utilizes both of these APIs to enhance the functionality and interactivity of the app. By integrating AWS S3 buckets, users can easily upload and share files and media, while Google Maps API allows users to quickly and accurately locate and interact with their local communities. Despite the challenges that come with incorporating third-party APIs, Neighborhood Node showcases the importance of leveraging these tools to provide a more seamless and enjoyable user experience.
