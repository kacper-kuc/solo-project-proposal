import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const StaffDashboard = () => {
    const [staff, setStaff] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('userToken');
        if (!token) {
            navigate('/login');
        } else {
            axios.get('http://localhost:8000/staff')
                .then(response => setStaff(response.data))
                .catch(err => console.error(err));
        }
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem('userToken');
        navigate('/login');
    };

    const removeStaff = (id) => {
        axios.delete(`http://localhost:8000/staff/${id}`)
            .then((res) => {
                console.log(res.data);
                setStaff(staff.filter((staffMember) => staffMember._id !== id));
            })
            .catch((err) => console.log(err));
        };
    

    return (
        <div>
            <div className='nav'>
                <h1>Manage Business</h1>
                <button onClick={handleLogout} className="btn btn-danger">
                        Logout
                    </button>
            </div>
            <div className='dashboard'>
                <p><Link to="/staff/add"><button>+ Add Staff</button></Link></p>
                <div className="staff-dashboard">
                    {staff.length > 0 ? (
                    staff.map((staffMember, index) => (
                        <div key={index} className="staff-box">
                        <img src={staffMember.profileImage || "/default-profile.png"} alt="Profile" />
                        <Link to={`/staff/${staffMember._id}/edit`} className="staff-name-link"><p>{staffMember.name}</p></Link>
                        <button onClick={() => removeStaff(staffMember._id)}>Remove</button>
                        </div>
                    ))
                    ) : (
                    <p>No staff members to display</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default StaffDashboard;