/* eslint-disable react/no-unescaped-entities */
import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function CourseDetail() {
  const {id} = useParams()
  const [course, setCourse] = useState()
  const [darkMode, setDarkMode] = useState(null)

  useEffect(() => {
    axios.get(`/api/get/course/${id}`).then(res => {
        setCourse(res.data[0])
    })
  },[id])
      
  useEffect(() => {
      if(JSON.parse(localStorage.getItem('mode'))){
      setDarkMode(true)
      }else{
      setDarkMode(false)
      }
  }, [JSON.parse(localStorage.getItem('mode'))])

  return course ? (
    <div className="container mt-5">
      <div className="row justify-center">
        <div className="col-lg-8">
          <article>
            <header className="mb-4">
              <h1 className={`fw-bolder mb-1 ${darkMode ? 'text-white' : 'text-brand-night'}`}>{course.title}</h1>
              <div className="text-muted fst-italic mb-2 text-[16px]">
                Нийтлэгдсэн {course.created_at}
              </div>
            </header>
            <figure className="mb-4">
              <img
                className="img-fluid rounded w-full shadow-md"
                src={require(`../../../../public/images/${course.image}`).default}
                alt="..."
              />
            </figure>
            <section className="mb-5">
              <div className={`fw-bolder mb-1 text-[20px] ${darkMode ? 'text-white' : 'text-brand-night'}`} dangerouslySetInnerHTML={{__html: course.content}}/>
            </section>
          </article>
        </div>
      </div>
    </div>
  )
  :
  null
}
