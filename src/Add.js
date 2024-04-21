import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Add() {
    const [inputData, setInputData] = useState({ number: '' });
    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();

        axios.post('https://localhost:7168/api/v1/Floors', inputData)
            .then(res => {
                alert("Data added successfully");
                navigate('/'); 
            })
            .catch(error => console.log(error));
    }

    return (
        <div className="container mt-5">
            <div className="w-50 border bg-light p-5">
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="number">Number</label>
                        <input type="text" name="number"
                            value={inputData.number} 
                            onChange={e => setInputData({ ...inputData, number: e.target.value })} className="form-control"></input>
                    </div>
                    <button type="submit" className='btn btn-info'>Submit</button> {/* Added type="submit" to the button */}
                </form>
            </div>
        </div>
    );
}

export default Add;
