import React, { Fragment } from 'react'
import { Card, Button, Row, Col } from 'react-bootstrap'
import AWSCloudLogo from './../AWSCloud.png'
import DevOpsLogo from './../DevOps.png'

const Courses = () => {
    return (
        <Fragment>
            <Row>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={AWSCloudLogo} />
                        <Card.Body>
                            <Card.Title>Ultimate AWS Certified Solutions Architect Associate</Card.Title>
                            <Card.Text>
                                Complete AWS Certified Solutions Architect Associate Training!
                    </Card.Text>
                            <Button variant="primary">Enroll</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={8}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={DevOpsLogo} />
                        <Card.Body>
                            <Card.Title>DevOps for the Absolute Beginner, Hands on DevOps!</Card.Title>
                            <Card.Text>
                                Build continuous integration, continuous delivery and DevOps pipelines with Java, Maven, & Docker.
                    </Card.Text>
                            <Button variant="primary">Enroll</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    );
}
export default Courses;
