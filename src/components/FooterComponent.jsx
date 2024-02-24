import React from 'react';
import { Outlet } from 'react-router-dom';

const FooterComponent = () => {
    return (
        <div>
            <footer className='footer'>
                <span>All Rights Reserved</span>
            </footer>
            <Outlet /> {/* Outlet renders child routes */}
        </div>
    );
}

export default FooterComponent;