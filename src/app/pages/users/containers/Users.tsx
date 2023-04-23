/* eslint-disable no-console */
import React from 'react';
import { Outlet } from 'react-router-dom';

const Users = (): JSX.Element => {
  return (
    <div className='users'>
      <Outlet />
    </div>
  );
};

export default Users;
