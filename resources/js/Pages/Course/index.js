import CourseCard from '../../Components/Card/CourseCard'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Course() {
  const [courseNews, setCourseNews] = useState([])
  const [selected, setSelected] = useState(0)
  const [darkMode, setDarkMode] = useState(null)

  const first = courseNews.filter(function (el){
      return el.category_id === 1
  })

  const second = courseNews.filter(function (el){
    return el.category_id === 2
  })

  const tirth = courseNews.filter(function (el){
    return el.category_id === 3
  })

  const tab = [
    {
      title: 'Өсвөр нас'
    },
    {
      title: 'Харилцаа'
    },
    {
      title: 'Гэр бүл'
    },
  ]

  useEffect(() => {
    axios.get(`/api/get/courses`).then(res => {
      setCourseNews(res.data)
    })
  },[])

  useEffect(() => {
    if(JSON.parse(localStorage.getItem('mode'))){
      setDarkMode(true)
    }else{
      setDarkMode(false)
    }
  }, [JSON.parse(localStorage.getItem('mode'))])

  return (
    <div className='mx-[50px] my-[80px]'>
      <div className='w-full flex flex-row items-center gap-[10px] justify-center'>
        {
          tab.map((data, index) => {
            return(
              <div onClick={() => setSelected(index)} className={`py-[6px] text-[16px] font-medium px-[8px] cursor-pointer rounded-[4px] border ${selected === index ? 'bg-brand-prime' : `${darkMode && 'text-[#fff]'}`}`} key={index}>{data.title}</div>
            )
          })
        }
      </div>
      {
        selected === 0
        ?
        <div className='flex flex-wrap gap-[30px] mt-[30px]'>
          {first.map((data, index) => {
            return(
              <CourseCard key={index} course={data}/>
            )
          })}
        </div>
        :
        selected === 1
        ?
        <div className='flex flex-wrap gap-[30px] mt-[30px]'>
          {second.map((data, index) => {
            return(
              <CourseCard key={index} course={data}/>
            )
          })}
        </div>
        :
        selected === 2
        ?
        <div className='flex flex-wrap gap-[30px] mt-[30px]'>
          {tirth.map((data, index) => {
            return(
              <CourseCard key={index} course={data}/>
            )
          })}
        </div>
        :null
      }
    </div>
  )
}
