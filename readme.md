# Twitter Clone 🐦

A full-stack Twitter clone built using the **MERN** stack (MongoDB, Express, React, Node.js) and styled with **Tailwind CSS**. This project replicates core Twitter functionality, offering users a sleek interface to post tweets, like posts, and manage profiles.

## Live Demo

[Twitter Clone Demo](https://geek-twitter-clone.netlify.app/)

## Features ✨

- **User Authentication**: Secure sign-up and log-in using JWT (JSON Web Token) authentication.
- **Tweet Posting**: Users can post tweets in real time.
- **Like Functionality**: Users can like/unlike tweets.
- **Bookmark Tweets**: Bookmark tweets for later reference.
- **Follow/Unfollow**: Follow or unfollow users to get their tweets in your feed.
- **User Profiles**: Users can update their profile information.

## API Endpoints 📡

### User Authentication and Profile

- `POST /register`: Register a new user
- `POST /login`: Log in an existing user
- `GET /logout`: Log out the current user
- `GET /profile/:id`: Get the profile of the authenticated user
- `GET /otheruser/:id`: Get the profile of another user
- `POST /follow/:id`: Follow a user
- `POST /unfollow/:id`: Unfollow a user

### Tweets

- `POST /create`: Create a new tweet (Authenticated)
- `DELETE /delete/:id`: Delete a tweet by ID (Authenticated)
- `PUT /like/:id`: Like or dislike a tweet by ID (Authenticated)
- `GET /alltweets/:id`: Get all tweets from a specific user (Authenticated)
- `GET /followingtweets/:id`: Get all tweets from users you follow (Authenticated)

### Bookmarking

- `PUT /bookmark/:id`: Bookmark a tweet by ID (Authenticated)

## Tech Stack 🛠

- **Frontend**: React, Tailwind CSS
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Authentication**: JSON Web Tokens (JWT)

## Deployment

- **Backend Deployment**: The backend is deployed on **Render**, providing a reliable hosting environment for our APIs.
- **Frontend Deployment**: The frontend is deployed on **Netlify**, enabling fast and easy access to our application.

## Future Enhancements 🚧

- Retweet functionality
- Space functionality
