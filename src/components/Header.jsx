import React from 'react';
import logo from '../assets/logo.png'
import coin from '../assets/coin.png'

const Header = ({ coins }) => {
    return (
        <div className='flex justify-between w-[1200px] mx-auto'>
            <img src={logo} alt="" />
            <div className='flex items-center text-gray-400 font-bold gap-10'>
                <p>Home</p>
                <p>Fixture</p>
                <p>Teams</p>
                <p>Schedules</p>
                <button className='border px-5 py-3 rounded-xl flex text-center text-gray-700 items-center'>
                    {coins} Coin <img src={coin} alt="" />
                </button>
            </div>
        </div>
    );
};

export default Header;