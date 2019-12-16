import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import photo from '../images/profilephoto.JPG'
import Information from '../components/Information'
import FeaturedProjects from '../components/FeaturedProjects'


export default function Home() {
    return (
        <>
        <Hero>
            <Banner title="Cheng Hao Nyew" subtitle="Software Developer">
                    <div className='img-container '>
                        <p><img className='pp' src={photo} alt=""></img></p>
                    </div>
                </Banner>
        </Hero>
        <FeaturedProjects/>
        <Information/>
        </>
    )
}

