import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { createContext, useContext } from 'react';
import QueSet from './QueSet';
import {  faEye } from '@fortawesome/free-solid-svg-icons'

export  let QueContext = createContext('')
const Quiz = ({dar}) => {
    console.log(dar);
    return (
        <div className='border mt-10 bg-gray-200'>
            
            <p className='text-center mt-3 px-4 py-16 mx-auto text-2xl font-bold '>{dar.question}</p>
            <FontAwesomeIcon  className='px-8 ' icon={faEye}></FontAwesomeIcon>

            <div>
            <QueContext.Provider value={dar}>
            <ol className=' px-8 pb-8 py-2 mx-auto border grid grid-cols-2 gap-4'>
            {
                    dar.options.map(que => <QueSet
                    key={que.id}
                    que ={que}
                    />)
                }
            </ol>
            </QueContext.Provider>
            </div>
            
        </div>
    );
};

export default Quiz;