import React, { Component } from 'react'
import Title from './Title'
import {FaGithub, FaLinkedin,FaEnvelope, FaFileAlt} from 'react-icons/fa'
import {Link} from 'react-router-dom';

export default class Service extends Component {
    state={
        services:[
            {
                icon:<FaGithub/>,
                title:"GitHub",
                link:"https://github.com/chenghaonyew"
            },
            {
                icon:<FaLinkedin/>,
                title:"LinkedIn",
                link:"https://www.linkedin.com/in/cheng-hao-nyew-ab6992191/"
            },
            {
                icon:<FaEnvelope/>,
                title:"Gmail",
                link:"mailto:nyewch0404@gmail.com"
            },
            {
                icon:<FaFileAlt/>,
                title:"Resume",
                link:"https://github.com/chenghaonyew/React_Portfolio/blob/master/src/images/NyewChengHao_Resume.pdf"
            }
        ]
    };
    render() {
        return (
            <section className="services">
                <Title title='Contact ∙ Information' />
                <div className='services-center'>
                    {this.state.services.map((item, index) =>{
                        return <article key={index} className='service'>
                            <span>{item.icon}</span>     
                            <a href={item.link} className='btn-primary'>
                                {item.title}
                            </a>
                        </article>
                    })}
                </div>
            </section>
        )
    }
}
