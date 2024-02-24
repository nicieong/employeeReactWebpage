import React from 'react';
import { Outlet } from 'react-router-dom';

const HeaderComponent = () => {
    return (
        <div>
            <header>
                <nav className='navbar navbar-expand-md navbar-dark bg-dark justify-content-center'>
                    <div className='navbar-brand mb-10 h1'>Employee Management App</div>
                </nav>
            </header>
            <Outlet /> {/* Outlet renders child routes */}
        </div>
    );
}

export default HeaderComponent;