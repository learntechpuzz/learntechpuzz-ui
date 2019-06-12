import React from 'react'
import {Carousel} from 'react-bootstrap'

const Courses = () => {
    return (
      <Carousel>
            <Carousel.Item>
            <img
                className="d-block w-100"
                data-src="holder.js/800x400?text=AWS&bg=343a40"
                alt="AWS"
            />
            <Carousel.Caption>
                <h3>Ultimate AWS Certified Solutions Architect Associate</h3>
                <p>Complete AWS Certified Solutions Architect Associate Training!</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src="holder.js/800x400?text=DevOps&bg=343a40"
                alt="DevOps"
            />

            <Carousel.Caption>
                <h3>DevOps for the Absolute Beginner</h3>
                <p>Hands On DevOps!</p>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel >
        
    );
}
export default Courses;
