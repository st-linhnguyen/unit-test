import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { ApiService } from '@core/services/api.service';
import { handleRemoveItems } from '@app/core/helpers/common.helper';

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
      console.log(res);
      setUsers([ ...res ]);
    }).catch(err => {
      console.error(err);
    }).finally(() => {
      setLoading(true);
    });
  };

  const onDelete = useCallback((id: number) => {
    setUsers((pre) => handleRemoveItems(pre, [id]));
  }, []);

  return (
    <>
      {
        (!isLoading || users.length) ?
        <table className="min-w-full text-left text-sm font-light">
          <thead className="border-b font-medium dark:border-neutral-500">
            <tr>
              <th scope="col" className="px-6 py-4">Name</th>
              <th scope="col" className="px-6 py-4">Email</th>
              <th scope="col" className="px-6 py-4">Phone</th>
              <th scope="col" className="px-6 py-4"></th>
            </tr>
          </thead>
          <tbody>
            {
              users.map((user) => (
                <tr key={ user.id } className="border-b dark:border-neutral-500">
                  <td className="whitespace-nowrap px-6 py-4">{ user.name }</td>
                  <td className="whitespace-nowrap px-6 py-4">{ user.email }</td>
                  <td className="whitespace-nowrap px-6 py-4">{ user.phone }</td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <Link data-testid={`${user.id}`} to={`${user.id}`}>Detail</Link>
                    <button onClick={ () => onDelete(user.id) }>Delete</button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table> :
        <p>No users found</p>
      }
    </>
  );
};

export default UserList;
