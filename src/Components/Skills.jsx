import React from 'react'
import './skills.css'
import { Col, Row } from 'react-bootstrap'

function Skills() {
  return (
    <section className='skills-section' id='skills'>
      <div className='my-2 section-title'>
        <h2 className='text-dark fw-bold'>Skills</h2>
        <p style={{fontStyle:'italic',fontWeight:'bold'}}>My Technical level</p>
      </div>
      <div className="container">
        <Row className='d-flex justify-content-center'>
            
                <Col lg={5} md={6} sm={12} className='skill-items shadow p-3 m-2' data-aos="flip-right" data-aos-easing="linear" data-aos-duration="1500">
                  <h4 className='fw-bold text-dark'>Frontend Developer</h4>
                  <div>
                      <Row className='my-1'>
                          <Col>
                              <p className='fw-bold'><span><i class="uil uil-check-circle me-2 text-success"></i></span>HTML5</p>
                              <p className='ms-4'>Advanced</p>
                          </Col>
                          <Col>
                              <p className='fw-bold'><span><i class="uil uil-check-circle me-2 text-success"></i></span>TailwindCSS</p>
                              <p className='ms-4'>Advanced</p>
                          </Col>
                      </Row>
                      <Row className='my-1'>
                          <Col>
                              <p className='fw-bold'><span><i class="uil uil-check-circle me-2 text-success"></i></span>CSS3</p>
                              <p className='ms-4'>Advanced</p>
                          </Col>
                          <Col>
                              <p className='fw-bold'><span><i class="uil uil-check-circle me-2 text-success"></i></span>JavaScript</p>
                              <p className='ms-4'>Intermediate</p>
                          </Col>
                      </Row>
                      <Row className='my-1'>
                          <Col>
                              <p className='fw-bold'><span><i class="uil uil-check-circle me-2 text-success"></i></span>React JS</p>
                              <p className='ms-4'>Intermediate</p>
                          </Col>
                          
                      </Row>
                      
                  </div>
                </Col>

                <Col lg={5} md={6} sm={12} className='skill-items shadow p-3 m-2' data-aos="flip-left" data-aos-easing="linear" data-aos-duration="1500">
                  <h4 className='fw-bold text-dark'>Backend Developer</h4>
                  <div>
                      <Row className='my-1'>
                          <Col>
                              <p className='fw-bold'><span><i class="uil uil-check-circle me-2 text-success"></i></span>Node JS</p>
                              <p className='ms-4'>Intermediate</p>
                          </Col>
                          <Col>
                              <p className='fw-bold'><span><i class="uil uil-check-circle me-2 text-success"></i></span>Mongo DB</p>
                              <p className='ms-4'>Intermediate</p>
                          </Col>
                      </Row>
                      <Row className='my-1'>
                          <Col>
                              <p className='fw-bold'><span><i class="uil uil-check-circle me-2 text-success"></i></span>Express JS</p>
                              <p className='ms-4'>Intermediate</p>
                          </Col>
                          
                      </Row>
                      
                  </div>
                </Col>
               
            </Row>
        </div>
    </section>
  )
}

export default Skills
