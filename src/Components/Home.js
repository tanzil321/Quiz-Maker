import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CartElement from './CartElement/CartElement';



const Home = () => {
    const loaderData = useLoaderData()
    
    return (
        <div className='px-2 py-2 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-2 lg:py-2'>
            <div className='px-w py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-24'>
            <h1 className='text-center text-5xl font-mono font-bold text-violet-500 uppercase'>Welcome to my Quiz Section</h1>
            <img  src={require("../quiz.png")} alt="" />
            
            </div>
            <div className='grid gap-6 row-gap-5 mb-8 lg:grid-cols-3 sm:row-gap-6 sm:grid-cols-2'>
                {
                    loaderData.data.map(topic => <CartElement
                    key={topic.id}
                    topic ={topic}
                    />)
                }

            </div>
        </div>
    );
};

export default Home;