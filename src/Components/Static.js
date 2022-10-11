import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const Static = () => {
    const totalData = useLoaderData();
    return (
        <div>
            <h1 className='mt-6 text-center text-5xl font-mono font-bold text-bkack '>Quiz Static Results</h1>
            <div>
            <LineChart className='mt-6 px-4 py-16 mx-auto' width={500} height={400} data={totalData.data}>
            <Line type="monotone" dataKey="total" stroke="#82ca9d" />
            <XAxis dataKey="name"></XAxis>
            <YAxis></YAxis>
            <Tooltip></Tooltip>
            </LineChart>
            
            </div>
            
        </div>
    );
};

export default Static;