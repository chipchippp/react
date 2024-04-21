import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function Edit() {
    const [data, setData] = useState({ id: '', number: '' }); // Initialize data with default values
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`https://localhost:7168/api/v1/Floors/id?id=${id}`) 
            .then(res => setData(res.data))
            .catch(err => console.log(err));
    }, [id]); 

    function handleSubmit(event) {
        event.preventDefault();

        axios.put(`https://localhost:7168/api/v1/Floors/id?id=${id}`, data) 
            .then(res => {
                alert("Data Edited successfully");
                navigate('/');
            })
            .catch(error => console.log(error));
    }

    return (
        <div className="container mt-5">
            <div className="w-50 border bg-light p-5">
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">id</label>
                        <input type="text" name="id"
                            value={data.id} disabled
                            className="form-control"
                            onChange={e => setData({ ...data, id: e.target.value })}
                        />
                    </div>
                    <div>
                        <label htmlFor="name">Number</label>
                        <input type="text" name="number"
                            value={data.number}
                            className="form-control"
                            onChange={e => setData({ ...data, number: e.target.value })}
                        />
                    </div>
                    <button type="submit" className='btn btn-info'>Update</button>
                </form>
            </div>
        </div>
    );
}

export default Edit;
