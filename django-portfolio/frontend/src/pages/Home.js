import React from 'react';

import me from './../images/me-image-2.jpg';

const Home = () => {
    return ( 
        <div className='m-32 grid grid-cols-2 shadow-lg p-12 w-auto'>
            <div className=''>
                <h1 className='text-4xl py-8'>Mario Seiler</h1>
                <h3 className='text-lg border-b-gray-700 pb-2 border-b-2'>Informatiker EFZ in Richtung Applikationsentwickler</h3>
            </div>
            <div className='my-auto'>
                <img src={me} alt="pb" className='h-48 m-auto'/>
            </div>
        </div>
    );
};


export default Home;