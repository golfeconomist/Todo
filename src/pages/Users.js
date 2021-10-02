import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default () => {
    let [users, setUsers] = useState([]);

    useEffect(async () => {
        const users = await fetch('https://jsonplaceholder.typicode.com/users');
        const userData = await users.json();
        setUsers(userData);
    }, []);

    return (
        <div className="container mt-5 mb-5">
            <h1 className="display-4 text-center mb-3">Users</h1>

            <table class="table table-hover">
                <thead>
                    <tr>
                        <th></th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user) => {
                            return (
                                <tr key={user.id}>
                                    <td>
                                        <Link to={"/todos/" + user.id}>
                                            Todos
                                        </Link>
                                    </td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.phone}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
};