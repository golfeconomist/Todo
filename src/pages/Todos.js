import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

export default () => {
    let { id } = useParams();

    let [todos, setTodos] = useState([]);
    let [user, setUser] = useState([]);

    useEffect(async () => {
        const todos = await fetch('https://jsonplaceholder.typicode.com/todos/?userId=' + id);
        const user = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
        const todosData = await todos.json();
        const userData = await user.json();
        setTodos(todosData);
        setUser(userData);
    }, []);

    return (
        <div className="container mt-5 mb-5">
            <h1 className="display-4 text-center mb-3">Todos for {user.name}</h1>
            <div className="text-center mb-3">
                <Link to="/">Back to Users</Link>
            </div>

            <table class="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Completed</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        todos.map((todo) => {
                            return (
                                <tr key={todo.id}>
                                    <td>{todo.title}</td>
                                    <td>{todo.completed === true ? "Yes" : "No"}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}