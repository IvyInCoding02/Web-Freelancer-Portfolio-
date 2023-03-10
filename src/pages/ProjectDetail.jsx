import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";


// media


function projectDetail() {
    const { id } = useParams();
    const [data, setData] = useState({});

    const {title, fullPicture, skills, gitHubLink} = data;

    const getProjectData = () => {
        axios.get(`http://localhost:8080/projects/${id}`).then((res) => setData(res.data))
    }

    useEffect(() => {
        getProjectData();
    }, [])


  return (
    <main className="section">
    <div className="container">
        <div className="project-details">

            <h1 className="title-1">{title}</h1>

            <img 
            src={fullPicture} 
            alt={title}
            className="project-details__cover"/>

            <div className="project-details__desc">
                <p>Skills: {skills?.map
                ((skill, idx) => `${skill}${skill.length > idx +1 ? ', ' : ''}`)}</p>
            </div>

            <a target={'_blank'} href="gitHubLink" className="btn-outline">
                GitHub repo
            </a>
        </div>
    </div>
</main>
  )
}

export default projectDetail;