import React from 'react';
import { Link } from 'react-router-dom';

function Pricing() {
    return (
        <div>
            <div className='nav'>
                <h1>Pricing</h1>
                <Link to="/"><button>Home</button></Link>
            </div>
            <div className='overrall'>
            <table className='pricing-table'>
                    <thead>
                    <tr>
                        <th>Service</th>
                        <th>Price</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Full Set (1)S</td>
                        <td>$55</td>
                    </tr>
                    <tr>
                        <td>Full Set (2)M</td>
                        <td>$65</td>
                    </tr>
                    <tr>
                        <td>Full Set (3)L</td>
                        <td>$75</td>
                    </tr>
                    <tr>
                        <td>Full Set (4)XL</td>
                        <td>$85</td>
                    </tr>
                    <tr>
                        <td>Full Set (5-6)XXL</td>
                        <td>$95</td>
                    </tr>
                    <tr>
                        <td>Builder Gel Manicure</td>
                        <td>$45</td>
                    </tr>
                    <tr>
                        <td>No Chip Manicure</td>
                        <td>$40</td>
                    </tr>
                    <tr>
                        <td>No Chip Pedi</td>
                        <td>$50</td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div className='overrall'>
                <p>To secure your appointment, a $20 deposit will be required for all bookings made via phone call.</p>
            </div>
        </div>
    );
}

export default Pricing;