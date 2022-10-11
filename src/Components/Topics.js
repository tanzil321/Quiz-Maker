import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from './Quiz';


const Topics = () => {
    let amarSawwa = useLoaderData();
    console.log(amarSawwa.data.questions);
    return (
        <div>
            <h1>This is topic</h1>
            {amarSawwa.data.questions.map(dar=><Quiz
            dar = {dar}
            />)}
        </div>
    );
};

export default Topics;