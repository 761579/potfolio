import { Component, React } from "react";
import { Row, Col } from 'react-bootstrap'


export default class Experience extends Component {

    render() {
        return (

            <>
                <div >

                    <div className='bg-gradient-to-br from-blue-900 via-black to-blue-900       rounded-lg  shadow-2xl   mx-32  mt-10 '>
                        <h1 className='text-white   rounded-lg  text-center shadow-2xl'>Experience</h1>
                        <div className='text-white  mx-32  py-10'>
                        <Row>
                                <Col xm={10} className='text-left' >
                                    <h4 className='underline'> Technical Support Advisor </h4>
                                    <p>
                                        IntouchCX, Winnipeg, Canada </p>
                                        
                                       
                                </Col>
                                <Col xm={2} className='text-right'>  04/2022-03/2023</Col>
                            </Row>
                            <Row>
                            <p className='underline text-left'>  RESPONSIBILITIES: </p>
                                        <ul className="list-disc   text-left">
                                            <li>Conducted in-depth troubleshooting and analysis of software and hardware issues to identify root causes and provide effective solutions.</li>
                                            <li>Acted as a subject matter expert, assisting Level-1 support agents by providing guidance and expertise in resolving complex technical issues.</li>
                                            <li>Utilized remote desktop software to remotely access customers' systems, diagnose problems, and perform necessary configurations or installations.</li>
                                            <li>Collaborated closely with engineering and product development teams to communicate customer feedback, identify recurring issues, and contribute to product improvement initiatives.</li>
                                            <li>Created and maintained comprehensive documentation, including troubleshooting guides and knowledge base articles, to enable efficient issue resolution and knowledge sharing within the team.</li>
                                            
                                        </ul>
                            </Row>
                            <Row>
                                <Col xm={10} className='text-left' >
                                    <h4 className='underline'> Full-Stack Developer </h4>
                                    <p>
                                        Humming Payment Technologiies, Toronto, Canada </p>
                                </Col>
                                <Col xm={2} className='text-right'>  06/2021-02/2022</Col>
                            </Row>
                            <Row>
                            <p className='underline text-left'>  RESPONSIBILITIES: </p>
                            <ul className="list-disc  text-left">
                                <li>Collaborated closely with UI/UX designers to transform prototypes and wireframes into fully functional and visually appealing websites, ensuring seamless user experiences.</li>
                                <li>Implemented responsive design techniques to ensure optimal performance and usability across various devices and screen sizes.</li>
                                <li>Developed and maintained reusable components and libraries to streamline the development process and improve code efficiency.</li>
                                <li>Conducted thorough testing and debugging of websites and applications to identify and resolve issues, ensuring a high level of quality and performance.</li>
                                <li>Utilized version control systems, such as GitHub, for code management, collaboration, and seamless deployment processes</li>
                                
                                
                            </ul>
                            </Row>
                            





                        </div>
                    </div>
                    <br />
                </div>



            </>

        )
    }

}