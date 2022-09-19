import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';

export default function CourseCard({course}) {
    const [darkMode, setDarkMode] = useState(null)

    useEffect(() => {
      if(JSON.parse(localStorage.getItem('mode'))){
        setDarkMode(true)
      }else{
        setDarkMode(false)
      }
    }, [JSON.parse(localStorage.getItem('mode'))])

    return (
        <div className='max-w-[250px] rounded-[10px] shadow-lg'>
            <img alt='' className='w-full h-[165px] object-cover rounded-t-[10px]' src={require(`../../../../public/images/${course.image}`).default}/>
            <div className={`p-[25px] border-t ${darkMode && 'bg-[#362c2b]'}`}>
                <Link className="no-underline" to={{pathname: `/course/${course.id}`}}>
                    <p className={`text-[20px] line-clamp-1 font-medium ${darkMode ? 'text-[#fff]' : 'text-[#3D5170]'}`}>{course.title}</p>
                </Link>
                <p className={`text-[15px] ${darkMode ? 'text-[#fff]' : 'text-[#5A6169]'} mt-[20px] line-clamp-5`}>{course.content}</p>
            </div>
        </div>
    );
}
