import { Component, React } from "react";
import { Carousel, Col, Row } from 'react-bootstrap'
import PBG from '../assets/PBG.jpg'
import homemehra from '../assets/projects pic/homemehra.png'
import packags from '../assets/projects pic/packags.png'
import booking from '../assets/projects pic/booking.JPG'
import home from '../assets/projects pic/home.png'
import display from '../assets/projects pic/display.png'
import book_form from '../assets/projects pic/book_form.png'
import update from '../assets/projects pic/update.png'
import about from '../assets/projects pic/about.JPG'
import { Document, Page } from 'react-pdf'
import pdf from '../assets/pdf.pdf'
import Footer from './Footer'

const scrollContainerStyle = { height: "500px" }
export default class Projects extends Component {
    render() {
        return (
            <>
                <div className="bg-black   bg-fixed  bg-center  bg-no-repeat  bg-cover   pb-20">


                    <h1 className='text-white  text-center underline pt-10'>PROJECTS</h1>
                    <div className=" text-white text-left ps-4  border-b-2 border-white pb-4">
                        <div  className="grid grid-cols-2 gaps-4">
                    <p className=' pt-10  text-2xl'>Objective:
                    </p>
                    <span className="text-right pt-10  pr-2">
                    <a href="https://github.com/761579/LittleLemon/tree/liitlelemon" className="text-right text-xl  mr-2">GitHub Link</a>
                    </span>
                    </div>
                    <p className=' text-xl'>
                    Using React and CSS, I developed a responsive online reservation website for a restaurant, aiming to optimize the dining experience for customers and streamline restaurant operations, while showcasing my skills in web development.
                       
                      
                    </p>


                    <p className=' text-xl  underline  pt-2'> Description</p>


                    <p className=' pl-5  text-lg'>
                    I developed a responsive online reservation booking website for a restaurant using React and CSS. The website features a user-friendly interface, real-time availability updates, and a smooth booking process. Customers can easily navigate, explore available options, and make bookings. The website provides accurate information on table availability, sends confirmation notifications, and allows modifications or cancellations. It incorporates interactive calendars, automated reminders, and customizable settings for restaurant owners. With optimized performance and responsive design, this project showcases my skills in front-end development, usability, and creating seamless user experiences.
                    </p>
                    <div className="pt-2 pl-5  text-white">
                   
                    </div> 
                    </div>
                    <p className='ps-4  text-white pt-5 text-left text-xl'> Objective:  Designing front-end of a website using only HTML and CSS
                        <a href="https://github.com/761579/mehra-tour-and-travels.git " className="text-right  pl-96 ">GitHub Link</a>
                    </p>
                    <p className='ps-4  text-white text-left  text-lg'>Programming Language: HTML, CSS</p>
                    <div >
                        <Carousel className="mx-5 my-2 border-8 border-indigo-600  ">

                            <Carousel.Item style={scrollContainerStyle}  >
                                <img
                                    className=" mr-5"
                                    src={homemehra}
                                    alt="First slide"
                                />


                            </Carousel.Item>
                            <Carousel.Item style={scrollContainerStyle}>
                                <img
                                    className="     h-100   w-100 mr-5"
                                    src={about}
                                    alt="second slide"


                                />

                            </Carousel.Item>
                            <Carousel.Item style={scrollContainerStyle}>
                                <img
                                    className="    mr-5"
                                    src={packags}
                                    alt="Third slide"
                                />


                            </Carousel.Item>
                            <Carousel.Item style={scrollContainerStyle}>
                                <img
                                    className="     h-100   w-100 mr-5"
                                    src={booking}
                                    alt="Forth slide"


                                />

                            </Carousel.Item>


                        </Carousel>
                    </div>
                    <p className='ps-4 text-white text-left  underline text-xl'> Description</p>
                    <div className="  pb-10  border-b-2 border-white">


                        <div className="bg-opacity  ml-4  py-4 rounded-xl">
                            <p className='text-left pl-5  text-white text-lg'> The Front-end part of a website has been designed(with wireframes and a working sample)
                                as a final project using only HTML and CSS for an imaginary company that offers trips. It is designed to provide
                                all information regarding available packages and offers. It also includes forms to contact the company and book packages online.</p>
                        </div>
                     </div>
                    <p className='ps-4    pt-20 text-white text-left  text-xl'>Objective:  Using Django framework, create a web application and include all  CRUD operations in it.
                        <a href="https://github.com/761579/hospital.git " className="text-right pl-48 mr-2">GitHub Link</a>

                    </p>
                     <p className='ps-4  text-white   text-left text-lg'>Programming Language: Python, CSS, Bootstrap, Html</p>
                     <div >
                            <Carousel className="mx-5  border-8 border-indigo-600">

                                <Carousel.Item className="scrollbar scrollbar-primary " style={scrollContainerStyle}  >
                                    <img
                                        className="mr-5"
                                        src={home}
                                        alt="First slide"
                                    />

                                </Carousel.Item>
                                <Carousel.Item className="scrollbar scrollbar-primary  " style={scrollContainerStyle}>
                                    <img
                                        className="mr-5"
                                        src={book_form}
                                        alt="Second slide"
                                    />


                                </Carousel.Item>
                                <Carousel.Item className="scrollbar scrollbar-primary " style={scrollContainerStyle}>
                                    <img
                                        className="     h-100   w-100 mr-5"
                                        src={display}
                                        alt="Third slide"


                                    />
                                </Carousel.Item>
                                <Carousel.Item className="scrollbar scrollbar-primary " style={scrollContainerStyle}>
                                    <img
                                        className="h-100   w-100 mr-5"
                                        src={update}
                                        alt="Third slide"


                                    />
                                </Carousel.Item>

                            </Carousel>



                        </div>

                    
                    
                    <p className='ps-4 text-white text-left underline text-xl'> Description</p>
                    <div className="pb-10  border-b-2 border-white" >


                        <div className="bg-op   mt-1   ml-2  py-4 rounded-xl">
                            <p className='text-left pl-5  text-white text-lg'> This project has been created in VS code using the Django framework.
                                This project aims to showcase all the crud(Create, Read, Update, Delete) operations. It is designed for hospital management to
                                book appointments, view all booked appointments, delete and update existing appointments.
                                The data has been stored in SqlLite3, and phone no. is used as an id for patients.</p>

                        </div>
                        

                    </div>
                    <div className=" text-white text-left ps-4">
                    <p className=' pt-10  text-2xl'>Objective:</p>
                    <p className=' text-xl'> Create a Database structure for any company or system, write
                        all test cases to fulfill all the project requirements, and create a document (pdf) using LaTeX that includes a goal,
                        requirements, UML diagrams,  traceability matrix, and all of these test cases.
                        <br />
                    </p>


                    <p className=' text-xl  underline  pt-2'> Description</p>


                    <p className='   pl-5  text-lg'>This project has been created using SQL Server Management studio.

                        The main goal of this project is to help the hostel management maintain their records of allotted rooms, empty rooms,
                        students fee deadlines and mess timings.The Database contains six tables students, hostels, rooms, payments, mess, visitors.
                    </p>
                    <div className="pt-2 pl-5  text-white   ">
                    <a href={pdf}>Click here to view LaTeX document of this project.</a><br/> 
                    <a href="https://github.com/761579/sql.git" >Click here to view SQL queries of this project.</a>
                    </div> 
                    </div>

                    
                </div>

            </>)

    }

}