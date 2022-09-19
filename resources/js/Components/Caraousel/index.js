/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from "axios"
import { useState, useEffect } from "react"
import { Carousel } from "react-bootstrap"
import { Link } from "react-router-dom"

function ControlledCarousel() {
  const [index, setIndex] = useState(0)
  const [darkMode, setDarkMode] = useState(null)
  const [sliders, setSliders] = useState([])

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex)
  }
  
  useEffect(() => {
    if(JSON.parse(localStorage.getItem('mode'))){
      setDarkMode(true)
    }else{
      setDarkMode(false)
    }
  }, [JSON.parse(localStorage.getItem('mode'))])

  useEffect(() => {
    axios.get('/api/get/sliders').then(res => {
      setSliders(res.data)
    })
  }, [])

  return (
    <Carousel
      interval={1000}
      activeIndex={index}
      onSelect={handleSelect}
      variant="dark"
      className="mb-8 min-h-[320px] max-h-[320px] mt-[30px]"
    >
      {
        sliders.map((data, index) => {
          return(
            <Carousel.Item key={index} className="min-h-[320px] max-h-[320px]">
              <div className="container flex flex-1 justify-center items-center">
                <a href={data.link} target="_blank">
                  <img
                    className="d-block"
                    src={require(`../../../../public/images/sliders/${data.image}`).default}
                    width="500"
                    height="500"
                    alt="First slide"
                  />
                </a>
              </div>
            </Carousel.Item>
          )
        })
      }
    </Carousel>
  )
}

export default ControlledCarousel
