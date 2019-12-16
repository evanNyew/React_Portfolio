import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import photo from '../images/profilephoto.JPG'
import ProjectsContainer from '../components/ProjectsContainer'
import Information from '../components/Information'

const Projects = () => {
    return (
        <>
        <Hero>
            <Banner title='Cheng Hao Nyew' subtitle='Standards are always out of date.  That’s what makes them standards.'>
                <div className='img-container '>
                    <p><img className='pp' src={photo} alt=""></img></p>
                </div>
            </Banner>
        </Hero>
        <ProjectsContainer/>
        <Information/>
        </>
    )
}

export default Projects;