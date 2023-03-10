import Projects from '../components/Projects';
import React,{ useState, useEffect } from 'react';
import axios from 'axios';



function Home () {
    const [projects, setProjects] = useState([]);
    const getProjects = () => {
        axios
        .get('http://localhost:8080/projects')
        .then((response) => setProjects(response.data));
    };

    useEffect(() => {
        getProjects();
    }, []);
        
        
     return(
        <>   
        <div className="header">
        <div className="header__wrapper">
            <h1 className="header__title">
                <strong>Hi, my name is <em>Yurii</em></strong><br/>
                a frontend developer
            </h1>
            <div className="header__text">
                <p>with passion for learning and creating.</p>
            </div>
            <a href="#!" className="btn">Download CV</a>
        </div>
    </div>
    <Projects />
    </>
    )
}

export default Home;