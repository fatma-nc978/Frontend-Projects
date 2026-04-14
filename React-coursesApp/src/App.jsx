import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './Header.jsx'
import { courses } from './Data.jsx'
import Course from './Course.jsx'

function App() {

  return (
    <>
      <Header />
      <div className='course-main'>
        {
          courses.map((course) => (
            <Course key={course.id} course={course} />
          ))
        }
      </div >
    </>
  )
}

export default App
