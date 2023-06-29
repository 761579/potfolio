import { Component, React } from "react";
import { Row, Col } from 'react-bootstrap'

export default class Certifications extends Component {
    render() {
        return (
            <>
                <div>
                    <div>
                        <div className='bg-gradient-to-br from-indigo-900 via-black  to-indigo-900    rounded-lg  shadow-2xl   mx-32  mt-10 '>
                            <h1 className='text-white   text-center   rounded-lg underline  shadow-2xl'>Certifications</h1>
                            <div className='text-white  mx-32  py-10'>
                                <Row>
                                    <Col xm={8} className='text-left' >
                                        
                                <h4 className='underline'>Meta Front-end Developer Professional Certificate</h4>
                                <a href="https://www.coursera.org/account/accomplishments/specialization/certificate/Z5J2HRJQZPYA">View Certification</a>
                                      
                                    </Col>
                                    <Col xm={4} className='text-right'> June 2023</Col>
                                </Row>
                                <Row >
                                    <ul className="list-disc text-left  ps-6">
                                        <li>Earned Meta Front-End Professional Certificate, validating expertise in front-end web development.</li>
                                        <li>Skilled in utilizing popular frameworks and libraries like React,Bootstrap, and Tailwind CSS.</li>
                                        <li>Demonstrated ability to deliver high-quality web applications that provide optimal user experiences.</li>
                                        <li>Proven track record of collaborating effectively in team environments and continuously honing skills to stay current with industry trends.</li>
                                        <li>Proficient in HTML, CSS, and JavaScript, with a focus on creating interactive and responsive web interfaces.
</li>
                                    </ul>
                                    
                                </Row>
                                <br /><br />



                            </div>
                        </div>
                        <br />
                    </div>
                </div>

            </>
        )
    }

}