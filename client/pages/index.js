import React from 'react';

import buildClient from '../api/build-client';

const LandingPage = ({ currentUser }) => {
  return <h1>{currentUser ? 'You are signed in' : 'You are NOT signed in'}</h1>;
};

LandingPage.getInitialProps = async context => {
  const client = buildClient(context);
  const response = await client.get('/api/users/currentuser');

  return response.data;
};

export default LandingPage;
