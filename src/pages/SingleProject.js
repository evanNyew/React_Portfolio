import React, { Component } from 'react'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import {ProjectContext} from '../context'
import StyledHero from '../components/StyledHero'
import Information from '../components/Information'
import photo from '../images/profilephoto.JPG'

export default class SingleProject extends Component {
    constructor(props){
        super(props);
        this.state = {
            slug: this.props.match.params.slug,
        };
    }

    static contextType = ProjectContext;

    render() {
        const {getProject} = this.context;
        const project = getProject(this.state.slug);
        if(!project){
            return <div className='error'>
                <h3> no such project could be found</h3>
                <Link to='/project' className='btn-primary'>
                    Back to Projects
                </Link>
            </div>
        }
        const {
            name,
            description, 
            status, 
            extras, 
            images
        } = project
        const[mainImg,...defaultImg] = images
        return (
            <>
            <StyledHero img={mainImg}>
            <Banner title={`${name} project`} subtitle='The only way ot achieve impossible is believe it is possible'>
                <div className='img-container'>
                    <p><img className='pp' src={photo} alt=""></img></p>
                </div>    
            </Banner>                
            </StyledHero>
            <section className='single-room'>
                <div className='single-room-images'>
                    {images.map((item, index) => {
                        return <img key={index} src={item} alt={name}/>
                    })}
                </div>
                <div className='single-room-info'>
                    <article className='desc'>
                        <h3>details</h3>
                        <p>{description}</p>
                    </article>
                    <article className='info'>
                        <h3>info</h3>
                        <h6>Project status: {status}</h6>
                    </article>
                </div>
            </section>
            <section className='room-extras'>
                <h3>Technologies Involved</h3>
                <ul className="extras">
                    {extras.map((item,index)=>{
                        return <li key={index}> {item}</li>
                    })}
                </ul> 
            </section>
            <Information/>
            </>
        )
    }
}
