import React, { useContext } from 'react';
import QueSet from './QueSet';
import { RingContext } from './Topics';

const Quiz = ({dar,ind}) => {
    
    return (
        <div>
            <p>{ind}</p>
            <p className='text-center'>{dar.question}</p>
            <div>
            <ol className='border grid grid-cols-2 gap-4'>
            {
                    dar.options.map(que => <QueSet
                    key={dar.id}
                    que ={que}
                    />)
                }
            </ol>
            </div>
        </div>
    );
};

export default Quiz;