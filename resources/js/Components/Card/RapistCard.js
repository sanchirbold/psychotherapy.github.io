import React, { useState, useEffect } from 'react'
import RapistDetail from '../../Pages/Therapist/RapistDetail'

export default function RapistCard({rapist}) {
    const [isShown, setIsShown] = useState(false)  
    const [darkMode, setDarkMode] = useState(null)

    useEffect(() => {
        if(JSON.parse(localStorage.getItem('mode'))){
            setDarkMode(true)
        }else{
            setDarkMode(false)
        }
    }, [JSON.parse(localStorage.getItem('mode'))])

    return (
        <div className='max-w-[240px] cursor-pointer flex flex-col items-center w-full shadow rounded-[10px]'>
            <img onClick={() => setIsShown(rapist)} className='w-[240px] h-[200px] object-cover shadow-md rounded-t-[10px]' alt="" src={require(`../../../../public/images/${rapist.profile}`).default} />
            <div className={`h-full w-full flex flex-col py-[30px] px-[20px] items-center justify-center border rounded-b-[10px] ${darkMode ? "bg-[#303030]" : 'bg-white'}`}>
                <p onClick={() => setIsShown(rapist)} className={`mb-[24px] w-full text-[24px] font-bold ${darkMode ? 'text-[#fff]' : 'text-[#4F4F4F]'}`}>{rapist.firstname} {rapist.lastname}</p>
                <div className='text-[#9E9E9E] w-full text-[20px] line-clamp-2'>{rapist.description}</div>
            </div>
            <RapistDetail  setIsShown={setIsShown} isShown={isShown}/>
        </div>
    )
}
