import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Course from './Course';
import '../App.css'
import Login from './login';
import { useAuth } from '../context/AuthProvider';
import Logout from './Logout';

function Navbar() {

    const [authUser, setAuthUser] = useAuth()

    const [theme, setTheme] = useState('localStorage.getItem("theme")?.localStorage.getItem("theme"):"light")');
    const element = document.documentElement;

    useEffect(() => {
        if (theme === 'dark') {
            element.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            document.body.classList.add('dark');
        } else {
            element.classList.remove('dark');
            localStorage.setItem('theme', 'light');
            document.body.classList.remove('dark');
        }
    }, [theme]);

    const [sticky, setSticky] = React.useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setSticky(true);
            } else {
                setSticky(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const NavItems = (
        <>
            <li className="mb-2"><a href="/">Home</a></li>
            <li className="mb-2"><a href="/Course">Course</a></li>
            <li className="mb-2"><a href="/Contact">Contact</a></li>
            <li className="mb-2"><a href="/About">About</a></li>
            
        </>
    );

    return (

        <div className="bg-base-100 shadow-md">
            <div className={`max-w-screen-2xl container mx-auto px-4 md:px-20 flex flex-col lg:flex-row items-start lg:items-center justify-between py-4 fixed top-0 left-0 right-0${sticky ? ' bg-base-200 shadow-md z-50' : ''}   `}>
                {/* Logo */}
                <div className="mb-4 lg:mb-0">
                    <a className="text-2xl font-bold cursor-pointer">BookStore</a>
                </div>

                {/* Vertical Navigation Menu */}
                <div className="menu menu-vertical bg-base-100 rounded-lg p-4 shadow-lg lg:shadow-none lg:bg-transparent lg:rounded-none lg:menu-horizontal">
                    {NavItems}
                </div>

                {/* Search Bar */}
                <div className="w-full max-w-lg mb-4 lg:mb-0 lg:ml-4">
                    <div className="input input-bordered flex items-center w-full">
                        <svg
                            className="h-5 w-5 opacity-50 mr-2"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                        >
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </g>
                        </svg>
                        <input
                            type="search"
                            className="w-full focus:outline-none"
                            placeholder="Search"
                        />
                    </div>
                </div>

                {/* Theme Toggle and Login Button */}
                <div className="flex items-center space-x-4">
                    {/* Theme Toggle */}
                    <label className="swap swap-rotate">
                        <input type="checkbox" className="theme-controller" value="synthwave" />
                        {/* Sun Icon */}
                        <svg
                            className="swap-off h-6 w-6 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                        >
                            <path
                                d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"
                            />
                        </svg>
                        {/* Moon Icon */}
                        <svg
                            className="swap-on h-6 w-6 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
                            <path
                                d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"
                            />
                        </svg>
                    </label>

                    {
                        authUser ? ( <Logout /> ):(

                    <div>
                        <a className="btn btn-primary" onClick={() => document.getElementById("my_modal_3").showModal()}>Login</a>
                        <Login />
                    </div> 
                    )}

                </div>
            </div>
        </div>

    );
}

export default Navbar;
