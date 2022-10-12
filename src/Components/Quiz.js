import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { createContext, useContext } from 'react';
import QueSet from './QueSet';
import {  faEye } from '@fortawesome/free-solid-svg-icons'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export  let QueContext = createContext('')
const Quiz = ({dar}) => {
    console.log(dar);
    const { question, correctAnswer, options } = dar;
    const notify = () => toast(`${correctAnswer}`);

    const no = (e) => {

        if (e.target.value === correctAnswer) {
            toast.success("Correct Answer");
        } else {
            toast.warning("Wrong Answer")
        }
    }
    return (
        <div className='border mt-10 bg-gray-200'>
            
            <p className='text-center mt-3 px-4 py-16 mx-auto text-2xl font-bold '>{dar.question}</p>
            
            <div className='flex my-8 items-center justify-center '>
            <button onClick={notify}>
            <FontAwesomeIcon  icon={faEye}></FontAwesomeIcon>
            </button>
            </div>
            
            

            <div>
            <QueContext.Provider value={dar}>
            <ol className=' px-8  pb-8 py-2 mx-auto border grid grid-cols-2 gap-4'>
            {
                options.map(que => <div className='rounded-lg bg-cyan-200 text-center px-8 py-6  '>
                    <input type="radio" name="name" value={que} onClick={no}></input><span>{que}</span>
                </div>)
            }
            <ToastContainer position='top-center' />
            </ol>
            </QueContext.Provider>
            </div>

           
            
        </div>
    );
};

export default Quiz;