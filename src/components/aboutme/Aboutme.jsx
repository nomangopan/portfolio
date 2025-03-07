import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { TbBrandFiverr } from 'react-icons/tb'
import './aboutme.css'

const AboutMe = () => {
    return (
        <div className='aboutme'>
            <div className='aboutme-leftsection'>
                <h1>Frontend ReactJS Developer</h1>

                <p>Hi, I'm <span>NOMAN</span>. A passionate Front-end React Developer based in Karachi, Pakistan. 
                </p>

                <div className='icon'>
                <FaLinkedin />
                    <FaGithub />
                    <TbBrandFiverr />

                </div>
            </div>

            {/* YEH IMAGE WALI DIV HAI */}
            <div className='aboutme-picture'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTONvusf0zDT91WJPM7D6rR8ZV0S5gVwCb0XQ&s' />
            </div>
        </div>
    )
}

export default AboutMe