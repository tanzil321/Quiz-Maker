import React, { useContext } from 'react';
import QueSet from './QueSet';
import { RingContext } from './Topics';

const Quiz = ({dar}) => {
    let ProsNo = useContext(RingContext)
    return (
        <div>
            <h2>{dar.question}</h2>
            <div>
            <ol className='border grid grid-cols-2 gap-4'>
            {
                    ProsNo.data.questions.map(dar => <QueSet
                    key={dar.id}
                    dar ={dar}
                    />)
                }
            </ol>
            </div>
        </div>
    );
};

export default Quiz;