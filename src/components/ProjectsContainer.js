import React from 'react'
import ProjectsList from './ProjectsList'
import {withProjectConsumer} from '../context'
import Loading from './Loading'



function ProjectContainer({context}){
    const {loading, projects} = context
    if(loading){
        return <Loading/>
    }
    return <ProjectsList projects={projects}/>
}

export default withProjectConsumer(ProjectContainer)