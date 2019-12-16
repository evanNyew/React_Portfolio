import React, { Component } from 'react'
import {ProjectContext} from '../context'
import Project from './Project'
import Loading from './Loading'
import Title from './Title'

export default class FeaturedProjects extends Component {
    static contextType = ProjectContext
    render() {
        let {loading, featuredProjects: projects} = this.context;
        projects = projects.map(project => {
            return <Project key={project.id} project={project}/>
        })
        return (
            <>
            <section className='featured-rooms'>
                <Title title="Introduction"></Title>
                <h4 className='introduction'> Hi, I'm Nyew, a sophomore majoring in computer science passionate about all things computer science, particularly software and web development.     </h4>
                <h4 className='introduction'> I'm currently working on a second hand trading application which are going to benefits the student of Minnesota with second hand items trading. </h4>
                <h4 className='introduction last'> Contact me for internships and research opportunities for Summer 2020! </h4>
                <Title title='featured projects'/>
                <div className='featured-rooms-center'>
                    {loading?<Loading/> : projects}
                </div>      
            </section>
            </>
        )
    }
}
