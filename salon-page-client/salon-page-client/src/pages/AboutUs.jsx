import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AboutUs = () => {
    const [staff, setStaff] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/staff')
        .then((res) => {
        setStaff(res.data);
        })
        .catch((err) => console.log(err));
    }, []);

    return (
        <div>
            <div className='nav'>
                <h1>Meet the Staff</h1>
                <Link to="/"><button>Home</button></Link>
            </div>
            <div className='overrall'>
                {staff.length > 0 ? (
                <div className='about-staff-box'>
                {staff.map((member) => (
                    <div key={member._id}>
                        <h3>{member.name}</h3>
                        <p>Specialties: {member.specialties}</p>
                        <p>Bio: {member.bio}</p>
                    </div>
                    ))}
                    </div>
                ) : (
                    <p>No staff members available at the moment.</p>
                )}
                <div className='overrall'>
                    <p>Address: 1693 N Weiland Rd, Buffalo Grove, IL 60089</p>
                    <p>Phone: 224-676-1067</p>
                </div>
            </div>
        </div>
    );}

export default AboutUs;