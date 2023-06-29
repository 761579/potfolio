import { Component, React } from "react";

import anjali from '../assets/anjali.jpeg'
import { Navbar, Nav, Container, Col, Row, Image } from 'react-bootstrap'
import bg from '../assets/bg.jpg'
import Education from './Education'
import Experience from './Experience'
import Footer from "./Footer";
import Projects from "./Projects";
import NavigationBar from "./NavigationBar";

import Coures from "./Coures";




export default class Home extends Component {
    render() {
        return (
            <>
                 <div style=
                {{
                     backgroundImage: 'url('+bg+')',
                     backgroundAttachment: "fixed",
                     backgroundPosition: 'center',
                     backgroundRepeat: 'no-repeat',
                     backgroundSize: 'cover',
                     height:'screen-height'
                }}>
       <NavigationBar/>
              
       <br/>
                  
   
        <div   className='  mx-32  mt-20   bg-black  opacity-90  text-white  '>
            <Row><Col   xs={4}>
                <img   src={anjali}   className='w-52 h-52  rounded-full   mt-10  ml-20 '/></Col>
                      
                <Col  xs={8}> 
                    <p   className='text-7xl   text-left  mt-16  ml-10   pt-2 font-semibold    '>  Hello,</p>
                    <p   className='text-4xl   text-left    ml-10  '> I   am Anjali Devi    </p>  
                </Col>
            </Row>
                  
                      
            <p  className='text-lg   text-white  text-left ml-10   bg-black   pt-20    px- 10  pb-8  italic  '> 
              Passionate and versatile, I am an entry-level web developer with a Meta
               professional certification in front-end development and a solid foundation
                in full-stack development. I excel in leveraging cutting-edge technologies
                to create engaging web solutions and providing technical support. 
                With strong problem-solving skills, a collaborative mindset, and a
                dedication to delivering high-quality results, I am open to exciting 
                opportunities to contribute to innovative web development projects and
                continue honing my skills in a dynamic and growth-oriented environment. 
                My Meta certification has equipped me with expertise in front-end
                technologies such as HTML, CSS, JavaScript, React, and Vue.js,
                while my exposure to full-stack development has given me proficiency 
                in back-end technologies like Node.js, Express, MongoDB, and MySQL. With excellent communication skills and a keen eye for detail, I am well-positioned to collaborate effectively with cross-functional teams and contribute to the success of projects. I am excited to apply my knowledge and passion to create exceptional web experiences and contribute to the advancement of the industry.
            <br/><br/>
          
            </p>
            
                       
        </div>
       <div  id="education"><Education/></div>
       <div  id="certification"><Coures /></div>
       <div  id="experience"><Experience/></div>
       <div  id="projects"><Projects/></div>
      

                



</div>



</>
        )
    }
}
