import { useState } from 'react';
import {useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

function Header (){
    const [isDark, setIsDark] = useState(JSON.parse(localStorage.getItem('darkMode')) || false);

    useEffect(() => {
        document.body.classList.toggle('dark');
        localStorage.setItem('darkMode', isDark)
    }, [isDark]);

    useEffect(() =>{
        if(JSON.parse(localStorage.getItem('darkMode'))){
            document.body.classList.add('dark');
        }else {
            document.body.classList.remove('dark');
        }
    })

    return(
        < header className="nav">
        <div className="container">
            <div className="nav-row">
                <Link to="/" className="logo"><strong>Freelancer</strong> portfolio</Link>

                <button className={`dark-mode-btn ${isDark ? 'dark-mode-btn--active' : ''}`} onClick={() => setIsDark(!isDark)}>
                    <img src='/assets/icons/moon.svg' alt="Light mode" className="dark-mode-btn__icon"/> 
                    <img src='/assets/icons/sun.svg' alt="Dark mode" className="dark-mode-btn__icon"/>
                </button>

                <ul className="nav-list">
                    <li className="nav-list__item">
                        <NavLink to="/" className="nav-list__link">Projects</NavLink>
                        </li>
                    <li className="nav-list__item">
                        <NavLink to="/skills" className="nav-list__link">Skills</NavLink>
                        </li>
                    <li className="nav-list__item">
                        <NavLink to="/contacts" className="nav-list__link">Contacts</NavLink>
                        </li>
                </ul>
            </div>
        </div>
    </header>
    )
}


export default Header;
