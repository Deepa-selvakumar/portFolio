import React from 'react'
import python from '../assets/python log.png'
import HTML from '../assets/html download.jpg'
import css from '../assets/css.png'
import js from '../assets/js.jpg'
import mern from '../assets/mern.jpg'

const Skills = () => {
  return (
    <>
    <div className="w-full flex flex-col px-10 py-5 bg-secondary text-white">
            <div >
            <h1 className='text-4xl border-b-4 border-primary mb-5 w-[170px] font-bold'>Skills</h1>
                </div>
                <p>In python iam strong in fundamendals,"I'm proficient in Python. </p>
                <p>I have strong skills in HTML and CSS, adept at creating responsive and visually appealing web interfaces. </p>
                <p>I have a solid grasp of JavaScript, proficient in both frontend and backend development, and experienced in building interactive and dynamic web applications.</p>
                <p>I am good in the MERN stack </p>
             
                <div className='skill gap-14 pt-6'>
                    <div className=''>
                        <img className='skill-img ' src={python}/>
                        <h3>Pyhton</h3>
                    </div>
                    <div>
                        <img className='skill-img' src={HTML}/>
                        <h3>HTML</h3>
                    </div>
                    <div>
                        <img className='skill-img' src={css}/>
                        <h3>CSS</h3>
                    </div>
                    <div>
                        <img className='skill-img' src={js}/>
                        <h3>Javascript</h3>
                    </div>
                    <div>
                        <img className='skill-img' src={mern}/>
                        <h3>MERN</h3>
                    </div>
                </div>
                </div>
</>
  )
}

export default Skills