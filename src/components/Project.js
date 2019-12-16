import React from 'react';
import {Link} from 'react-router-dom';
import defaultImage from '../images/Homebackground.jpg';
import PropTypes from 'prop-types';

export default function Project({project}) {
    const {name, slug, images, status, num} = project; //destruture
    return (
        <article className="room">
            <div className='img-container'>
                <img src={images[0] || defaultImage} alt="single room"/>
                <div className={num?'status-done':'status-undone'}>
                    <h6>{status}</h6>
                </div>
                <Link to={`/projects/${slug}`} className = "btn-primary room-link">
                    Details
                </Link>
            </div>
            <p className="room-info">{name}</p>
        </article>
    )
}

Project.propTypes = {
    room: PropTypes.shape({
        name:PropTypes.string.isRequired,
        slug:PropTypes.string.isRequired,
        images:PropTypes.arrayOf(PropTypes.string).isRequired,
        price:PropTypes.number.isRequired,
    })
}