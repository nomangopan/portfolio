import React from 'react'
import { MdSunny } from 'react-icons/md'
import './header.css'

const Header = () => {

    const headerMenuItems = [
        {
            itemName: "Home",
            itemLink: "/"
        },
        {
            itemName: "About me",
            itemLink: "#AboutMe"
        },
        {
            itemName: "Projects",
            itemLink: "#projects"
        },
        {
            itemName: "Education",
            itemLink: "#education"
        },
        {
            itemName: "Contact Me",
            itemLink: "#contactme"
        },
    ]



    return (
        <header>
            <h1>N</h1>
            <ul className='header-menuitems'>
                {headerMenuItems.map((i, index) => {
                    return (
                        <li key={index}>{i.itemName}</li>
                    )
                })}
            </ul>

            <button className='header-button'><MdSunny />
            </button>
          
        </header>
    )
}

export default Header