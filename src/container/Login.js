import React from 'react';

const Login = (location) => {
  const pathname = location.location.pathname;
  console.log(location);

  return (
    <div>
      Login<br/>
      {pathname}
    </div>
  );
};

export default Login;