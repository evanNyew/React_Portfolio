import React from 'react'
import Project from './Project'
import Title from '../components/Title'

export default function ProjectsList({projects}) {
    return (
        <section className='roomslist'>
            <Title title='Project List' />
            <div className='roomslist-center'>
                {
                    projects.map(item => {
                        return <Project key ={item.id} project={item} />
                    })
                }
            </div>
        </section>
    )
}
