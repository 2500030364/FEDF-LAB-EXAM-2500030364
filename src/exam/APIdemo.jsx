import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function APIDemo() 
{
    const [data, setData] = useState([])
    const [error, setError] = useState("")

    useEffect(() => 
    {
        axios.get("https://dummy-json.mock.beeceptor.com/posts")
        .then((response) => {
            setData(response.data)
        })
        .catch((err) => {
            setError(err.message)
        });
    }, []);

  return (
    <div>
        <h2><u> Posts Data </u></h2>
        {
            error ? <b>{error}</b> :
            data.length == 0 ?
            <b>Loading...</b> :
            <table border={1}>
               <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Body</th>
                    <th>Link</th>
                </tr>
                </thead>
                <tbody>
                {
                    data.map((post, index) => (
                        <tr key={index}>
                            <td>{post.id}</td>
                            <td>{post.title}</td>
                            <td>{post.body}</td>
                            <td>{post.link}</td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        }
    </div>
  )
}