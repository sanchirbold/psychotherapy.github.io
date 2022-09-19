import React, {useEffect, useState} from 'react'
import FeedCard from '../../Components/Card/FeedCard'

export default function Advise() {
    const [news, setNews] = useState([])
  
    useEffect(() => {
      axios.get('/api/get/news').then(res => {
        setNews(res.data)
      })
    }, [])

    return (
        <div className='container'>
            <div className='row pt-[80px]'>
                {
                    news.map((data, index) => {
                    return(
                        <FeedCard post={data} key={index}/>
                    )
                    })
                }
            </div>
        </div>
    )
}
