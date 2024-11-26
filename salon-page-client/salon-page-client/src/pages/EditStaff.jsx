import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

const EditStaff = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    
    const [staffData, setStaffData] = useState({
        name: '',
        specialties: '',
        bio: ''
    });

    const [errors, setErrors] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/staff`)
        .then(response => {
            setStaffData(response.data);
        })
        .catch(err => console.error(err));
    }, [id]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setStaffData(prevState => ({
        ...prevState,
        [name]: value
        }));
    };

    const handleUpdate = (e) => {
        e.preventDefault();

        const updatedData = {
        name: staffData.name?.trim() || '',
        specialties: staffData.specialties?.trim() || '',
        bio: staffData.bio?.trim() || ''
        };

        if (updatedData.name === '' || updatedData.specialties === '' || updatedData.bio === '') {
        setErrors({ message: "All fields are required!" });
        return;
        }

        axios.put(`http://localhost:8000/staff/${id}/edit`, updatedData)
        .then(() => {
            navigate('/staff');
        })
        .catch(err => {
            if (err.response && err.response.data) {
            setErrors(err.response.data.errors);
            } else {
            console.error(err);
            }
        });
    };

    return (
        <div>
            <div className='nav'>
                <h1>Edit Staff Member</h1>
                <Link to="/staff" ><button>Back</button></Link>
            </div>
            {errors.message && <p style={{ color: 'red' }}>{errors.message}</p>}
            <form onSubmit={handleUpdate}>
                <div>
                <label>Name:</label>
                <input
                    type="text"
                    name="name"
                    value={staffData.name || ''}
                    onChange={handleInputChange}
                />
                </div>
                <div>
                <label>Specialties:</label>
                <input
                    type="text"
                    name="specialties"
                    value={staffData.specialties || ''}
                    onChange={handleInputChange}
                />
                </div>
                <div>
                <label>Bio:</label>
                <textarea
                    name="bio"
                    value={staffData.bio || ''}
                    onChange={handleInputChange}
                />
                </div>
                <button type="submit">Update Staff</button>
            </form>
        </div>
    );
};

export default EditStaff;