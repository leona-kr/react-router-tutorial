import React from 'react';
import { Route, Link } from 'react-router-dom';

const Post = ({match}) => {
  return (
    <div>
        {match.params.title}
    </div>
  )
}

const Posts = (props) => {
  return (
    <div>
      <h1>Post</h1>
      <Link to="/posts/react">React</Link>
      <Link to="/posts/redux">Redux</Link>
      <Link to="/posts/relay">Relay</Link>
      <Route
        path="/posts/:title"
        component={Post}
      />
    </div>
  );
};

export default Posts;