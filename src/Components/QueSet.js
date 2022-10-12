import React, { useContext } from 'react';
import { QueContext } from './Quiz';


import { CardContext, RingContext } from './Topics';

const QueSet = ({que}) => {
    let funG = useContext(QueContext)
    console.log(funG.correctAnswer);
    let funD = useContext(CardContext)
    console.log(funD);
    let funf = (que)=>
    {
        console.log(que.correctAnswer);
        
    }
    let far = {listStyle:"decimal", listStylePosition:"inside"}
    return (
        <div>
            <li onClick={()=>{funf(que)}} style={far}  className='rounded-lg bg-cyan-200 px-5 py-6 mx-auto'>{que}</li>
            
        </div>
    );
};

export default QueSet;