import React from 'react'
import { BarChart, Bar, XAxis, CartesianGrid, Tooltip, ResponsiveContainer, Text } from 'recharts';


const data = [
    {
        uv: 0,
        pv: 0,
    },
    {
        uv: 0,
        pv: 0,
    },
    {
        uv: 0,
        pv: 0,
    },
    {
        uv: 0,
        pv: 0,
    },
    {
        uv: 0,
        pv: 0,
    },
    {
        uv: 0,
        pv: 0,
    },
    {
        uv: 0,
        pv: 0,
    },
    {
        uv: 0,
        pv: 0,
    },
    {
        uv: 0,
        pv: 0,
    },
    {
        uv: 0,
        pv: 0,
    },
    {
        uv: 0,
        pv: 0,
    },
    {
        uv: 0,
        pv: 0,
    },
    {
        uv: 0,
        pv: 0,
    },
    {
        name: '12:00',
        uv: 20,
        pv: 110,
    },
    {
        name: '12:00',
        uv: 0,
        pv: 50,
    },
    {
        name: '12:00',
        uv: 0,
        pv: 0,
    },
    {
        name: '12:00',
        uv: 0,
        pv: 0,
    },
    {
        name: '12:00',
        uv: 0,
        pv: 10,
    },
    {
        name: '12:00',
        uv: 0,
        pv: 0,
    },
    {
        name: '12:00',
        uv: 0,
        pv: 0,
    },
    {
        name: '12:00',
        uv: 0,
        pv: 0,
    },
    {
        name: '12:00',
        uv: 0,
        pv: 0,
    },
    {
        name: '12:00',
        uv: 0,
        pv: 0,
    },
    {
        name: '12:00',
        uv: 0,
        pv: 25,
    },
    {
        name: '12:00',
        uv: 0,
        pv: 50,
    },
    {
        name: '12:00',
        uv: 0,
        pv: 15,
    },
    {
        name: '12:00',
        uv: 0,
        pv: 10,
    },
    {
        name: '12:00',
        uv: 0,
        pv: 0,
    },
    {
        name: '12:00',
        uv: 0,
        pv: 0,
    },
    {
        name: '12:00',
        uv: 0,
        pv: 0,
    },
    {
        name: '12:00',
        uv: 0,
        pv: 0,
    },
    {
        name: '12:00',
        uv: 0,
        pv: 40,
    },
    {
        name: '12:00',
        uv: 0,
        pv: 20,
    },
    {
        name: '12:00',
        red: 10,
        pv: 40,
    },
    {
        name: '12:00',
        red: 40,
        pv: 90,
    },
    {
        name: '12:00',
        red: 20,
        pv: 50,
    },
    {
        name: '12:00',
        red: 10,
        pv: 40,
    },
    {
        uv: 0,
        pv: 0,
    },
    {
        uv: 0,
        pv: 0,
    },
    {
        uv: 0,
        pv: 0,
    },
    {
        uv: 0,
        pv: 10,
    },
    {
        uv: 0,
        pv: 0,
    },
    {
        uv: 0,
        pv: 0,
    },
    {
        uv: 0,
        pv: 0,
    },
    {
        uv: 0,
        pv: 0,
    },
    {
        uv: 0,
        pv: 0,
    },
    {
        uv: 0,
        pv: 0,
    },
    {
        uv: 0,
        pv: 0,
    },


];
const customTicks = ['', '', '','12:00', '', '', '', '', '','', '', '', '',  '', '', '6:00', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '12:00', '', '', '', '', '', '', '', '', '', '', '6:00', '', '', '', '', '', '', '', '', '', '','', '', '', '',];


const BarGraph = () => {
    return (
        <div className='w-full h-32 mb-10'>
            <div className='relative top-[4.5rem] left-1 text-xs text-gray-600'>900CAL</div>
            <div className='relative top-6 left-16 text-xs text-gray-600'>Good job</div>
            <div className='relative top-2 left-48 text-xs text-gray-600'>Less than 320cal</div>
            <ResponsiveContainer className="text-sm" width="100%" height="100%">
                <BarChart
                    width={600}
                    height={300}
                    data={data}
                    barCategoryGap={2} barGap={2}
                >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="name" interval={0} axisLine={{ stroke: '#8884d8',  strokeDasharray: '3 3' }} tick={{ fontSize: 10 }} tickLine={false} tickFormatter={(value, index) => customTicks[index]} />
                    <Tooltip />
                    <Bar dataKey="pv" stackId="a" fill="#7b91ff" />
                    <Bar dataKey="uv" stackId="a" fill="#82ca9d" />
                    <Bar dataKey="red" stackId="a" fill="#FF8DA1" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default BarGraph