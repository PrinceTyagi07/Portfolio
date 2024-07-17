import React, { useState } from "react";
import { Container, Row,Col } from "react-bootstrap";
import './qualification.css'

function Qualification() {
    const [toggleState,setToggleState] = useState(1)

    const toggleTab = (index)=>{
        setToggleState(index)
    }
  return (
    <section className="qualification-section my-5" id="qualification">
        <div className="d-flex justify-content-center flex-column align-items-center">
            <h2 className="section-title text-dark fw-bold">Qualification</h2>
            <p className="section-subtitle" style={{fontStyle:'italic',fontWeight:'bold'}}>My Personal Journey</p>
        </div>

        <div className="qualification-container container ">
            <div className="qualification-tabs flex gap-x-10">
                <div className={toggleState ===1 ? "qualification-button qualification-active button-flex ":
                 "qualification-button button-flex"} onClick={()=>toggleTab(1)}>
                    <i class="uil uil-graduation-cap qualification-icon"></i> Education
                </div>

                {/* <div className={toggleState ===2 ? "qualification-button qualification-active button-flex ":
                 "qualification-button button-flex"} onClick={()=>toggleTab(2)}>
                    <i class="uil uil-bag ms-3 qualification-icon"></i> Experience
                </div> */}
            </div>
            <div className="mt-5 qualification-section">
        <div className={toggleState ===1?"qualification-content qualification-content-active":
    "qualification-content"}>
            <div className="qualification-data mt-3"> 
                <div data-aos="fade-right" data-aos-easing="linear" data-aos-duration="900">
                    <h3 className="qualification-title">Bachelor of Technology (Information Technology)</h3>
                    <span className="qualification-subtitle">RD Engineering College Ghaziabad</span>
                    <div className="qualification-calendar">
                    <i class="uil uil-calendar-alt  me-2 calendar-icon"></i>2021 - 2025
                    </div>
                </div>

                <div>
                    <span className="qualification-rounder"></span>
                    <span className="qualification-line"></span>
                </div>
            </div>

            <div className="qualification-data mt-3">
                <div></div>
                <div>
                    <span className="qualification-rounder"></span>
                    <span className="qualification-line"></span>
                </div>
                
                <div data-aos="fade-left" data-aos-easing="linear" data-aos-duration="900">
                    <h3 className="qualification-title">Higher Secondary Education</h3>
                    <span className="qualification-subtitle">Eklavya Public school Muradnagar </span>
                    <div className="qualification-calendar">
                    <i class="uil uil-calendar-alt  me-2 calendar-icon"></i>2019 - 2021
                    </div>
                </div>

            </div>

            <div className="qualification-data mt-3">
                <div data-aos="fade-right" data-aos-easing="linear" data-aos-duration="900">
                    <h3 className="qualification-title">Secondary Education</h3>
                    <span className="qualification-subtitle">GreenLand Public School, Duhai</span>
                    <div className="qualification-calendar">
                    <i class="uil uil-calendar-alt  me-2 calendar-icon"></i>2017 - 2019
                    </div>
                </div>

                <div>
                    <span className="qualification-rounder"></span>
                    <span className="qualification-line"></span>
                </div>
            </div>

        </div>

        <div className={toggleState ===2?"qualification-content qualification-content-active":
    "qualification-content"}>
            <div className="qualification-data mt-3">
                <div data-aos="fade-right" data-aos-easing="linear" data-aos-duration="900">
                    <h3 className="qualification-title">Software Engineer (MERN Stack Developer)</h3>
                    <span className="qualification-subtitle"></span>
                    <div className="qualification-calendar">
                    <i class="uil uil-calendar-alt  me-2 calendar-icon"></i>February 2024 - Present
                    </div>
                </div>

                <div>
                    <span className="qualification-rounder"></span>
                    <span className="qualification-line"></span>
                </div>
            </div>

            <div className="qualification-data mt-3">
                <div></div>
                <div>
                    <span className="qualification-rounder"></span>
                    <span className="qualification-line"></span>
                </div>
                
                <div data-aos="fade-left" data-aos-easing="linear" data-aos-duration="900">
                    <h3 className="qualification-title">Full Stack Developer Intern (MEARN Stack Developer)</h3>
                    <span className="qualification-subtitle">Luminar Technolab, Kochi</span>
                    <div className="qualification-calendar">
                    <i class="uil uil-calendar-alt  me-2 calendar-icon"></i>June 2023 - January 2024
                    </div>
                </div>

            </div>

            <div className="qualification-data mt-3">
                <div data-aos="fade-right" data-aos-easing="linear" data-aos-duration="900">
                    <h3 className="qualification-title">Senior Systems Engineer (UI Developer)</h3>
                    <span className="qualification-subtitle">Infosys Limited, Thiruvananthapuram</span>
                    <div className="qualification-calendar">
                    <i class="uil uil-calendar-alt  me-2 calendar-icon"></i>March 2021 - March 2023
                    </div>
                </div>

                <div>
                    <span className="qualification-rounder"></span>
                    <span className="qualification-line"></span>
                </div>
            </div>

        </div>
      </div>
        </div>

        
        
    </section>
  );
}

export default Qualification;
