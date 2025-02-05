import React from 'react'
import BannerImage from '../assets/book.jpg'
import { useNavigate } from "react-router-dom";


function Banner() {

    const navigate = useNavigate();
    return (
        <>
            <div className='max-w-screen-2xl container mx-auto px-4 md:px-20  flex flex-col md:flex-row'>
                <div className=' order-2 md:order-1 w-full md:w-1/2'>
                    <div className='space-y-12 mt-22 md:mt-32'>
                        <h1 className='text-4xl font-bold'>Hello , Welcome here to learn something {" "}<span className='text-pink-500'>new everyday!!!</span></h1>
                        <p className='text-xl'>Welcome to BookStore, your ultimate reading destination! Discover a vast collection of books, explore new genres, and embark on unforgettable literary adventures today!</p>
                        <label className="input input-bordered flex items-center gap-2 w-full/2 mb-1">
                            Email
                            <input type="text" className="grow" placeholder="Enter Email to Login" />
                        </label>
                    </div>
                    <button className='btn btn-primary mt-4' onClick={() => navigate("/signup")} >Get Started</button>
                </div>

                <div className='order-1 w-full md:w-1/2 flex justify-center items-center mt-18'>
                    <img src={BannerImage} className='w-92 h-92' alt="" />
                </div>

            </div>
        </>
    )
}

export default Banner
