import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const CartElement = ({topic}) => {
    let {name,logo,total,id} = topic
    let naviGate  = useNavigate()
    let handleRumman = (id)=>{
        naviGate(`topic/${id}`)
    }
    return (
        <div className='relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl'>
            <div className='text-center flex flex-col max-w-screen-lg overflow-hidden bg-blue border rounded shadow-sm lg:flex-row sm:mx-auto'>
                <div className=' lg:w-1/2'>
                    <img className='bg-slate-300 ' src={logo} alt="" />
                </div>
                <div>
                <h5 className='mb-6  justify-self-center text-3xl font-extrabold leading-none sm:text-4xl'>{name}</h5>
                <h2 className='text-center'>Available Quiz: {total}</h2>
                <button onClick={()=>handleRumman(id)} className='px-8  block w-full mt-7 mx-3 mr-3 py-3 font-semibold rounded-lg bg-cyan-200 text-gray-800 hover:bg-cyan-400'>Go to Quiz</button>
               
                
                </div>
                
                
            </div>
            
        
        </div>
    );
};

export default CartElement;