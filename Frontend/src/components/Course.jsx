import React, { useEffect, useState } from 'react'

import Cards from './Cards'
import { Link } from 'react-router-dom'
import axios from "axios"

function Course() {

    const [book, setBook] = useState([])

    useEffect(() => {
        const getBook = async () => {
            try {
                const res = await axios.get("http://localhost:4001/book");
                console.log(res.data)
                setBook(res.data)
            } catch (error) {
                console.log(error)
            }

        }
        getBook();
    }, [])

    return (
        <>
            <div className='max-w-screen-2xl container mx-auto px-4 md:px-20'>
                <div className='text-center justify-center items-center mt-28'>
                    <h1 className='text-2xl font-semibold md:text-4xl'>
                        We're delighted to have you <span className='text-pink-500'>here! :)</span>
                    </h1>
                    <p className='mt-12'>Enhance your reading journey with expert-led courses designed for book lovers. Dive into literary analysis, storytelling techniques, and deep discussions on classic and modern books. Learn at your own pace with interactive lessons, quizzes, and community discussions. Whether you’re a casual reader or an aspiring writer, our courses help you explore themes, characters, and narratives, enriching your understanding and appreciation of literature. Start learning today!</p>
                    <Link to='/'>
                        <button className='bg-pink-500 text-white px-4 py-2 rounded-md mt-6 hover:bg-pink-600'>Back</button>
                    </Link>
                </div>
                <div className='mt-12 grid grid-cols-1 md:grid-cols-3 gap-3 '>
                    {
                        book.map((item) => <Cards key={item.id} item={item} />)
                    }
                </div>

            </div>
        </>
    )
}

export default Course
