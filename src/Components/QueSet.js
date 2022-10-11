import React from 'react';

const QueSet = ({dar}) => {
    console.log(dar.options);
    return (
        <div>
            <li className='border px-5 py-6 m-auto'>{dar.options}</li>
        </div>
    );
};

export default QueSet;