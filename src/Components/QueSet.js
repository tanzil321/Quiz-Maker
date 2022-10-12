import React, { useContext } from 'react';
import OptionSet from './OptionSet';
import { RingContext } from './Topics';

const QueSet = ({que}) => {
    let far = {listStyle:"decimal", listStylePos:"inside"}

    console.log(que.options);
    return (
        <div>
            <li  style={far}  className='border bg-cyan-200 px-5 py-6 m-auto'>{que}</li>
            
        </div>
    );
};

export default QueSet;