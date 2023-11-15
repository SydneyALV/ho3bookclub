import React, { useState } from 'react'
import SignOut from './SignOut'
import { Link } from 'react-router-dom'
import MenuModal from './MenuModal'
import { CiMenuBurger } from "react-icons/ci";


const NavigationBar = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <div className="rounded-2xl h-[120px] bg-blue-400 flex flex-row justify-between items-center p-6">
            <CiMenuBurger 
                className='text-3xl text-blue-800 hover:text-black cursor-pointer'
                onClick={() => setShowModal(true)}
            />
            <SignOut />
            {
                showModal && (
                    <MenuModal onClose={() => setShowModal(false)} />
                )
            }
            {/* <Link to="/menu" >Menu</Link> */}
        </div>
    )
}

export default NavigationBar