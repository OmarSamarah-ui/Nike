import React from 'react';
const Button = ({ label, iconUrl }) => {
    return (
        <button className='flex justify justify-centery gap-2 px-7 py-4 border font-montserrat text-lg leading-none bg-coral-red rounded-full text-white'>
            {label}
            {iconUrl && <img src={iconUrl} alt='icon' className='ml-2 rounded-full w-5 h-5' />}
        </button>
    );
};

export default Button;
