import { Component, React } from "react";
import { Nav, Navbar } from "react-bootstrap";

import { Link } from "react-scroll";

const navText =
  " text-white  border-transparent border-b-2 hover:border-white hover:block";
const activeNav = " border-b-2 border-brand-text ";
export default class NavigationBar extends Component {
    render() {
        return (
            <div>
                 <Navbar    fixed='top'    className="justify-content-center  text-white  bg-black    border-b-2   border-blue-900">
              
                 
                
            <Nav   defaultActiveKey="/home">
          
            <Nav.Link href="/"   className={"mr-6 " + navText} activeClassName={activeNav}>About Me</Nav.Link>
 
            <Link   to='education'   className={"mr-10  mt-2   text-decoration-none" + navText    }activeClassName={activeNav}>  Education</Link>
            <Link className={"mt-2   mr-6 text-decoration-none " + navText} activeClassName={activeNav} to='certification'> Certifications</Link>
            <Link  className={"mt-2  mr-6  text-decoration-none " + navText}   activeClassName={activeNav}   to='experience' > Experience </Link>
            <Link  className={"mt-2   text-decoration-none " + navText}activeClassName={activeNav}    to='projects'> Projects</Link>
            
            </Nav>
  
             </Navbar>
            </div>
        )
    }
}