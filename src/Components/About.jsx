import React from 'react'
import './about.css'
import { Row,Col, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function About() {
  const handleDownload = ()=>{
    window.open('/files/updated_cv.pdf', '_blank')
  }
  return (
    <section id='about'>
        <div className='my-4 mt-5 section-title'>
        <h2 className='text-dark fw-bold'>About Me</h2>
        <p style={{fontStyle:'italic',fontWeight:'bold'}}>My Introduction</p>
      </div>
    <div className='mt-5 about-section'>
      

      <Container>
          <Row className='mt-5 justify-content-center py-4'>

            <Col lg={6} md={12} sm={12} className='d-flex flex-column'>
                <div className='skillsdiv'>
                    <div className='features m-3 px-4 text-center shadow' data-aos="fade-left" data-aos-easing="linear" data-aos-duration="2500">
                        <i class="uil uil-award fa-2x"></i>
                        <p className='fw-bold'>Experience</p>
                        <p className='fw-bold'>1 + Years</p>
                    </div>
                    <div className='features m-3 px-4 text-center shadow' data-aos="fade-left" data-aos-easing="linear" data-aos-duration="2500">
                        <i class="uil uil-bag-alt fa-2x"></i>
                        <p className='fw-bold'>Completed</p>
                        <p className='fw-bold'>20 + Projects</p>
                    </div>
                    <div className='features m-3 px-4 text-center shadow' data-aos="fade-left" data-aos-easing="linear" data-aos-duration="2500">
                        <i class="uil uil-headphones-alt fa-2x"></i>
                        <p className='fw-bold'>Support</p>
                        <p className='fw-bold'>Online 24/7</p>
                    </div>
                </div>
                <div className='my-5 mx-3 font-fam' data-aos="fade-left" data-aos-easing="linear" data-aos-duration="2500">
                  <span className='fw-bold'>*</span> I have a total of 1.5 years of experience in Front End Technologies - React JS.
                   I have also completed a Full Stack Developer course (MERN Stack) from GreatLearning. <br />
                   <span className='fw-bold'>*</span> I have completed more than 20 projects in Web application development.I have worked on the implementation of
                   Front-End part of applications as per specification and design approach using HTML5, CSS, TailwindCSS, JavaScript,
                   and React JS. <br /><span className='fw-bold' style={{textAlign:'justify'}}>*</span> I have worked on removing impediments to the team's progress, 
                  and offering help when needed and	responsible for the design, writing and refactoring of high-quality codes 
                  and development of various technical features for the application within an Agile team. <br />
                  <span className='fw-bold'></span>
                </div>

                <div className='flex items-center justify-center' data-aos="fade-left" data-aos-easing="linear" data-aos-duration="2500">

                    <a href='/files/updated_cv.pdf' download><button onClick={handleDownload} className='btn btn-dark downloadcv-btn'>Download CV</button></a>
                </div>
            </Col>

            <Col lg={6} md={12} sm={12} className='profileImagesection' data-aos="fade-right" data-aos-easing="linear" data-aos-duration="2500">
            <div className="overflow-hidden rounded-lg">

              <img className='profileImage scale-75 ' src="/images/profileimg2.png" alt="profile image" />
            </div>
            </Col>
          </Row>
      </Container>
    </div>
    </section>

  )
}


export default About
