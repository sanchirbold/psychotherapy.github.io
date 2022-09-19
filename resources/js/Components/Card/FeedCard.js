/* eslint-disable import/no-unresolved */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const FeedCard = ({ post }) => {
  const [darkMode, setDarkMode] = useState(null)
  
  useEffect(() => {
    if(JSON.parse(localStorage.getItem('mode'))){
      setDarkMode(true)
    }else{
      setDarkMode(false)
    }
  }, [JSON.parse(localStorage.getItem('mode'))])

  return (
    <div className="col-md-6">
      <div className={`flex flex-row items-center  px-4  ${darkMode ? 'bg-[#303030]' : 'bg-[#fff]'} border rounded h-[213px] overflow-hidden flex-md-row mb-4 shadow-sm position-relative`}>
          <Link to={{pathname: `/news/${post.id}`}} className="cold-flex flex-column position-static">
            <h3 className={`mb-[10px] line-clamp-2 ${darkMode ? 'text-[#fff]' : 'text-[#000]'}`}>{post.title}</h3>
            <p className={`card-text text-[15px] mb-auto line-clamp-3 ${darkMode ? 'text-[#fff]' : 'text-[#000]'}`} dangerouslySetInnerHTML={{__html: post.content}}/>
            <div className="text-muted mt-[10px]">{new Date(post.created_at).getFullYear() + '-' + (new Date(post.created_at).getMonth() + 1) + '-' + new Date(post.created_at).getDay() + ', ' + new Date(post.created_at).getHours() + ':' + new Date(post.created_at).getMinutes()}</div>
          </Link>
          <img
            src={require(`../../../../public/images/${post.image}`).default}
            alt=""
            className="w-[250px] h-[160px] object-cover ml-[20px]"
          />
      </div>
    </div>
  )
}

export default FeedCard
