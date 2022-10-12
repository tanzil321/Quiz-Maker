import React, { useContext } from 'react';

import { RingContext } from './Topics';

const QueSet = ({que}) => {
    let funf = ()=> {
        // if ans === que{
            
        // }
    }
    let far = {listStyle:"decimal", listStylePosition:"inside"}

    console.log(que.options);
    return (
        <div>
            <li onClick={()=>{funf(que)}} style={far}  className='border bg-cyan-200 px-5 py-6 m-auto'>{que}</li>
            
        </div>
    );
};

export default QueSet;