import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <div className='nav'>
                <h1>Marvy Nails & Spa</h1>
                <div className='nav-buttons'>
                    <p><Link to="/about"><button>About Us</button></Link></p>
                    <p><Link to="/pricing"><button>Pricing</button></Link></p>
                </div>
            </div>
            <div className='overrall-2'>
                <p>Welcome to our Salon! Feel free to check out our staff on the About Us section and press Pricing for all service pricing!</p>
                <p>Address: 1693 N Weiland Rd, Buffalo Grove, IL 60089</p>
                <p>Phone: 224-676-1067</p>
            </div>
        </div>
    );
}

export default Home;