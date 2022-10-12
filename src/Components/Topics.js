import { data } from 'autoprefixer';
import React, { createContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import QueSet from './QueSet';
import Quiz from './Quiz';
export let CardContext = createContext('')
export let RingContext = createContext('')
const Topics = () => {
    let quizQues = useLoaderData();
    
    return (

        <div className='px-2 py-2 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-2 lg:py-2'>
            <div className='px-w py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-24'>
            <h1 className='text-center text-5xl font-mono font-bold text-violet-500 uppercase'>Quiz Of <span>{quizQues.data.name}</span></h1>
            
            
            </div>
            <RingContext.Provider value={quizQues}>
            <div >
                {
                    quizQues.data.questions.map((dar) => <Quiz
                    key={dar.id}
                    dar ={dar}
                    
                    />)
                }

            </div>
            </RingContext.Provider>
            
            
        </div>
    );
};

export default Topics;