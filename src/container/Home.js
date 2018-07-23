import React from 'react';

const Home = ({history}) => {
  return (
    <div>
      Home
      <button onClick={()=>{history.push('/posts')}}>
        go to posts
      </button>
    </div>
  );
};

export default Home;