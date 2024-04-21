import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function App() {
    const [columns, setColumns] = useState([]);
    const [records, setRecords] = useState([]);

    useEffect(() => {
        axios.get('https://localhost:7168/api/v1/Floors')
            .then((res) => {
                // Assuming res.data is an array and has at least one element
                if (res.data.length > 0) {
                    // Extracting column names from the first record
                    setColumns(Object.keys(res.data[0]));
                    setRecords(res.data);
                }
            })
            .catch(error => console.error('Error fetching data:', error)); // Added error handling
    }, []);

    return (
        <div className="container mt-5">
            <div className="text-end">
                <Link to="/create" className='btn btn-primary'>Add</Link>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        {columns.map((c, i) => (
                            <th key={i}>{c}</th>
                        ))}
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {records.map((d, i) => (
                        <tr key={i}>
                            {Object.values(d).map((value, index) => (
                                <td key={index}>{value}</td>
                            ))}
                            <td>
                                <Link to={`update/${d.id}`} className='btn btn-success'>Edit</Link>
                                <Link to="/delete" className='btn ms-1 btn-danger'>Delete</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default App;
