import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';


const AddStaff = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [specialties, setSpecialties] = useState('');
    const [bio, setBio] = useState('');
    const [errors, setErrors] = useState({});

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors({});

        let formErrors = {};
        if (name.trim() === '') formErrors.name = 'Name is required.';
        if (specialties.trim() === '') formErrors.specialties = 'Specialties are required.';
        if (bio.trim() === '') formErrors.bio = 'Bio is required.';

        if (Object.keys(formErrors).length > 0) {
        setErrors(formErrors);
        return;
        }

        try {
        await axios.post('http://localhost:8000/staff/add', { name, specialties, bio });
        navigate('/staff');
        } catch (err) {
        setErrors({ general: 'Failed to add staff. Try again.' });
        }
    };

    return (
        <div>
            <div className='nav'>
                <h1>Add Staff Member</h1>
                <Link to="/staff" ><button>Back</button></Link>
            </div>
            <form onSubmit={handleSubmit}>
                <div>
                <label>Name:</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                {errors.name && <p>{errors.name}</p>}
                </div>

                <div>
                <label>Specialties:</label>
                <input
                    type="text"
                    value={specialties}
                    onChange={(e) => setSpecialties(e.target.value)}
                />
                {errors.specialties && <p>{errors.specialties}</p>}
                </div>

                <div>
                <label>Bio:</label>
                <textarea
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                />
                {errors.bio && <p>{errors.bio}</p>}
                </div>

                {errors.general && <p>{errors.general}</p>}

                <button type="submit">Add Staff</button>
            </form>
        </div>
    );
};

export default AddStaff;