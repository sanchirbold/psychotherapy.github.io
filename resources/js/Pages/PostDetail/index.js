/* eslint-disable react/no-unescaped-entities */
import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import CommentCard from "../../Components/Card/CommentCard"

export default function NewsDetail() {
  const {postId} = useParams()
  const [news, setNews] = useState()
  const [comments, setComments] = useState([])
  const [value, setValue] = useState('')
  const [darkMode, setDarkMode] = useState(null)

  useEffect(() => {
    const fetchNews = async () => {
      await axios.get(`/api/get/news/${postId}`).then(res => {
        setNews(res.data[0])
      })
    }
    fetchNews()
  },[postId])

  useEffect(() => {
    axios.get(`/api/get/comment/${postId}`).then(res => {
      setComments(res.data)
    })
  },[postId])
      
  useEffect(() => {
    if(JSON.parse(localStorage.getItem('mode'))){
        setDarkMode(true)
    }else{
        setDarkMode(false)
    }
  }, [JSON.parse(localStorage.getItem('mode'))])

//   const onFileUpload = () => { 
//     // Create an object of formData 
//     const formData = new FormData(); 

//     // Update the formData object 
//     formData.append('comment', value);
//     formData.append('news_id', news.id);
//     formData.append('user_id', );

//     // Request made to the backend api 
//     // Send formData object 
//     axios.post('/api/post/comment', {formData})
//     .then(function (response) {
            
//         }
//     )
//     .catch(function (err) {
//         console.log(err)
//     })
// };


  function handleChange(event) {
      setValue(event.target.value)
  }

  return news ? (
    <div className="container mt-5">
      <div className="row justify-center">
        <div className="col-lg-8">
          <article>
            <header className="mb-4">
              <h1 className={`fw-bolder mb-1 ${darkMode ? 'text-white' : 'text-brand-night'}`}>{news.title}</h1>
              <div className="text-muted text-[16px] fst-italic mb-2">
                Нийтлэгдсэн {new Date(news.created_at).getFullYear() + '-' + (new Date(news.created_at).getMonth() + 1) + '-' + new Date(news.created_at).getDay() + ', ' + new Date(news.created_at).getHours() + ':' + new Date(news.created_at).getMinutes()}
              </div>
            </header>
            <figure className="mb-4">
              <img
                className="img-fluid rounded w-full shadow-md"
                src={require(`../../../../public/images/${news.image}`).default}
                alt="..."
              />
            </figure>
            <section className="mb-5">
              <div className={`text-[20px] ${darkMode ? 'text-white' : 'text-brand-night'}`} dangerouslySetInnerHTML={{__html: news.content}}/>
            </section>
          </article>
          <section className="mb-5">
            <div className="card bg-light">
              <div className={`card-body ${darkMode ? 'bg-brand-night' : 'bg-white'}`}>
                {
                  comments.length > 0 && comments.map((data, index) => {
                    return(
                      <CommentCard comment={data} key={index}/>
                    )
                  })
                }
                <form method="post" action="/api/post/comment" encType="multipart/form-data" className={`${darkMode ? 'bg-brand-night' : 'bg-white'} flex flex-col p-[30px] rounded-[10px]`}>
                  <input value={value} onChange={handleChange} name="comment" type={'text'} placeholder='Энд дарж бичнэ үү.' className='w-full h-[42px] border border-[#00121E1F] rounded-[4px] bg-white px-[16px]'/>
                  <input hidden value={JSON.parse(localStorage.getItem('loggedUser'))?.id} name="user_id" type={'text'} />
                  <input hidden value={news?.id} name="news_id" type={'text'} />
                  {
                    localStorage.getItem('user') ? 
                    <div className='w-full mt-[32px]'>
                      <button type="submit" style={{boxShadow: '4px 12px 32px rgba(0, 114, 188, 0.4), 0px 2px 16px rgba(0, 114, 188, 0.3), 0px 6px 8px rgba(0, 114, 188, 0.2)'}} className='w-[97px] h-[44px] bg-[#0072BC] rounded-[6px] text-white'>Нийтлэх</button>
                  </div>
                  :
                  null
                  }
              </form>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
  :
  null
}
