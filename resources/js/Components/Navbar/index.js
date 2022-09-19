import { Link, useLocation  } from "react-router-dom"
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap"
import { useState, useEffect } from "react";

function Header({checked, setChecked}) {
  const location = useLocation();
  const [darkMode, setDarkMode] = useState(null)

  const manage = () => {
    if(localStorage.getItem('loggedUser') === 'null'){
      return 'Нэвтрэх'
    }else if(JSON.parse(localStorage.getItem('loggedUser'))){
      return JSON.parse(localStorage.getItem('loggedUser'))?.name
    }
  }
  
  useEffect(() => {
    if(JSON.parse(localStorage.getItem('mode'))){
      setDarkMode(true)
    }else{
      setDarkMode(false)
    }
  }, [JSON.parse(localStorage.getItem('mode'))])

  return (location.pathname !== '/dashboard') && (location.pathname !== '/login') && (location.pathname !== '/register') && (
    <Navbar
      collapseOnSelect
      expand="lg"
      // bg="light"
      // variant="light"
      className={`${darkMode ? 'bg-brand-night border-b' : 'bg-brand-prime'}`}
    >
      <Container>
        <Navbar.Brand href="/">
          <p className="nav nav-link no-underline">Psychotherapy</p>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link className={`no-underline text-[16px] text-black p-2 ${darkMode ? 'text-white' : 'text-brand-night'}`} to="/quiz">
              Сонирхолтой тест
            </Link>
            <Link className={`no-underline text-[16px] text-black p-2 ${darkMode ? 'text-white' : 'text-brand-night'}`} to="/advise">
              Зөвлөгөө мэдээлэл
            </Link>
            <Link className={`no-underline text-[16px] text-black p-2 ${darkMode ? 'text-white' : 'text-brand-night'}`} to="/courses">
              Сургалт
            </Link>
            <Link className={`no-underline text-[16px] text-black p-2 ${darkMode ? 'text-white' : 'text-brand-night'}`} to="/members">
              Сэтгэл судлаачид
            </Link>
          </Nav>  
          <Nav>
            <div onClick={() => {
              setChecked(!checked)
              localStorage.setItem('mode', !checked)
            }}  className={`w-[40px] ${checked ? 'flex justify-end w-full bg-[#0000FF]' : 'justify-start bg-[#EFEFEF]'} cursor-pointer rounded-full py-[2px] px-[2px] h-[22px] mr-[20px]`}>
              <div className={`w-[18px] h-[18px] ${checked ? 'bg-[#808080]' : 'bg-white'} rounded-full`}>

              </div>
            </div>
          </Nav>
          <Nav>
            <Link className="text-[16px] no-underline" to={{pathname: '/login'}}>
              {manage()}
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
