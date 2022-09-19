import React, { useState, useEffect } from 'react'
import { Comment } from 'semantic-ui-react'

export default function CommentCard({comment}) {
  const [user, setUser] = useState()
  const [darkMode, setDarkMode] = useState(null)

  useEffect(() => {
    axios.get(`/api/get/user/${comment?.user_id}`).then(res => {
      setUser(res.data[0])
    })
  },[comment])
      
  useEffect(() => {
    if(JSON.parse(localStorage.getItem('mode'))){
        setDarkMode(true)
    }else{
        setDarkMode(false)
    }
  }, [JSON.parse(localStorage.getItem('mode'))])

  return (
    <Comment.Group>
      <Comment>
        <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/matt.jpg' />
        <Comment.Content>
          <div className='flex flex-row items-center'>
            <div className={`${darkMode ? 'text-white' : 'text-brand-night'}`}>{user?.name}</div>
            <div className={`ml-[10px] ${darkMode ? 'text-white' : 'text-brand-night'}`}>{comment.created_at}</div>
          </div>
          <div className={`mt-[6px] ${darkMode ? 'text-white' : 'text-brand-night'}`}>{comment.comment}</div>
        </Comment.Content>
      </Comment>
    </Comment.Group>
  )
}
