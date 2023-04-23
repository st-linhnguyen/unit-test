import React, { useEffect, useState } from 'react';

import { ApiService } from '@core/services/api.service';

const UserList = (): JSX.Element => {
  const [isLoading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const api = new ApiService();

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
    setLoading(true);
    api.get(['https://jsonplaceholder.typicode.com/users']).then((res: any) => {
      setUsers([ ...res ]);
    }).catch(err => {
      console.error(err);
    }).finally(() => {
      setLoading(true);
    });
  };

  return (
    <ul className='user-list'>
      <li className='user-item'>User item</li>
    </ul>
  );
};

export default UserList;
