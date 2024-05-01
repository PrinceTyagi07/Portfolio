import React, { useEffect, useState } from 'react'
import './projects.css'
import { Col, Modal, Row } from 'react-bootstrap'

function Projects() {

  const [projectActiveCheck,setProjectActiveCheck] = useState(1)
  const [show, setShow] = useState(false);
  const [modalData,setModalData] = useState({})

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [projectList,setProjectList] = useState([
    {image:'images/jscalculator.png',title:'Calculator Application',overview:"Calculator application developed using JavaScript that can perform basic arithmetic operations like addition, subtraction, multiplication and division",github:"https://github.com/ashishsamuel/calculator",livelink:"https://calculator141.netlify.app/",languages:"HTML, CSS, Bootstrap, JavaScript"},

    {image:'images/jsweather.png',title:'Weather Prediction Application',overview:"Weather Prediction application developed using JavaScript that displays the country, humidity, wind, pressure of the city provided by the user",github:"https://github.com/ashishsamuel/weatherjsapp",livelink:"https://weathercheck1478.netlify.app/",languages:"HTML, CSS, Bootstrap, JavaScript"},

    {image:'images/netflixreact.png',title:'Netflix Application',overview:"Netflix application developed using React that displays the basic User Interface of the netflix with large collection of films",github:"https://github.com/ashishsamuel/netflix",livelink:"https://netflix-7a546.netlify.app/",languages:"HTML, CSS, Bootstrap, JavaScript, React"},

    {image:'images/quizappreact.png',title:'Quiz Application',overview:"Quiz application developed using React that contains 10 questions where each question contains four answer options and user can select any one of the option. Results will be displayed after the completion of the last question. The application uses dark and light mode feature. It also uses the Context API in React",github:"https://github.com/ashishsamuel/quiz-app-react",livelink:"https://quiz-app-react-delta-beryl.vercel.app/",languages:"HTML, CSS, Bootstrap, JavaScript, React, Context API"},

    {image:'images/reactecommerce.png',title:'Zesco Online Store Application',overview:"Zesco is an Ecommerce application developed using React and Redux where user can view products, add or remove products to and from wishlist and cart, checkout products for purchasing. JSON Server is used as the backend server.",github:"https://github.com/ashishsamuel/zesco-ecommerce-site-react",livelink:"https://zesco.netlify.app/",languages:"HTML, CSS, Bootstrap, JavaScript, React, Redux, JSON Server"},
    
    {image:'images/firebasedocupapp.png',title:'Document Application (Doc Up)',overview:"DocApp is an web application developed using React and Firebase where user can create, update and remove text documents based on their needs. ReactQuill library is used as the text editor.",github:"https://github.com/ashishsamuel/doc-up-app",livelink:"https://doc-up-app.vercel.app/",languages:"HTML, CSS, Bootstrap, JavaScript, React, Firebase"},
    
    {image:'images/mern.png',title:'Travel Booking Application (TripFix)',overview:"TripFix is an travel booking MERN stack application developed using React, NodeJS and MongoDB. User can register and login to the web application using their registered credentials. They can serach for different cities and book a place by providing some booking details such as name, number of members, and booking date. User is able to update one's booking details before 2 weeks of the trip.",github:"https://github.com/ashishsamuel/tripFix-travelwebsite-frontend",livelink:"https://marvelous-yeot-35f061.netlify.app/home",languages:"HTML, CSS, Bootstrap, Material UI, JavaScript, React, NodeJS, Express, MongoDB"},
    
    {image:'images/meanproject.png',title:'ProBuy Ecommerce Application',overview:"ProBuy is an Ecommerce MEAN application developed using Angular, NodeJS, Express and MongoDB where user can register and login using the registered credentials. User can view products, add and remove products to and from cart and wishlist.  User can proceed for the final checkout from the cart where we used PayPal for performing transactions.",github:"https://github.com/ashishsamuel/proBuy-MEAN-frontend",livelink:"https://probuy-frontend.vercel.app/",languages:"HTML, CSS, Bootstrap, TypeScript, Angular, NodeJS, Express and MongoDB"},
    
    {image:'images/reactgameapp.png',title:'DiceGame Application',overview:"DiceGame is an web application game developed using React where user has to select a number and throw the dice. If both the numbers in the dice and the number selected becomes the same then user would be able to score points else user would lose existing points. Its a game where one can win only based on luck....",github:"https://github.com/ashishsamuel/Dicegame-app",livelink:"https://dicegame141.netlify.app/",languages:"HTML, CSS, Bootstrap, JavaScript, React"}
  ])

  const [projectAllList,setProjectAllList] = useState([
    {image:'images/jscalculator.png',title:'Calculator Application',overview:"Calculator application developed using JavaScript that can perform basic arithmetic operations like addition, subtraction, multiplication and division",github:"https://github.com/ashishsamuel/calculator",livelink:"https://calculator141.netlify.app/",languages:"HTML, CSS, Bootstrap, JavaScript"},
    {image:'images/jsweather.png',title:'Weather Prediction Application',overview:"Weather Prediction application developed using JavaScript that displays the country, humidity, wind, pressure of the city provided by the user",github:"https://github.com/ashishsamuel/weatherjsapp",livelink:"https://weathercheck1478.netlify.app/",languages:"HTML, CSS, Bootstrap, JavaScript"},
    {image:'images/netflixreact.png',title:'Netflix Application',overview:"Netflix application developed using React that displays the basic User Interface of the netflix with large collection of films",github:"https://github.com/ashishsamuel/netflix",livelink:"https://netflix-7a546.netlify.app/",languages:"HTML, CSS, Bootstrap, JavaScript, React"},
    {image:'images/quizappreact.png',title:'Quiz Application',overview:"Quiz application developed using React that contains 10 questions where each question contains four answer options and user can select any one of the option. Results will be displayed after the completion of the last question. The application uses dark and light mode feature. It also uses the Context API in React",github:"https://github.com/ashishsamuel/quiz-app-react",livelink:"https://quiz-app-react-delta-beryl.vercel.app/",languages:"HTML, CSS, Bootstrap, JavaScript, React, Context API"},
    {image:'images/reactecommerce.png',title:'Zesco Online Store Application',overview:"Zesco is an Ecommerce application developed using React and Redux where user can view products, add or remove products to and from wishlist and cart, checkout products for purchasing. JSON Server is used as the backend server.",github:"https://github.com/ashishsamuel/zesco-ecommerce-site-react",livelink:"https://zesco.netlify.app/",languages:"HTML, CSS, Bootstrap, JavaScript, React, Redux, JSON Server"},
    {image:'images/firebasedocupapp.png',title:'Document Application (Doc Up)',overview:"DocApp is an web application developed using React and Firebase where user can create, update and remove text documents based on their needs. ReactQuill library is used as the text editor.",github:"https://github.com/ashishsamuel/doc-up-app",livelink:"https://doc-up-app.vercel.app/",languages:"HTML, CSS, Bootstrap, JavaScript, React, Firebase"},
    {image:'images/mern.png',title:'Travel Booking Application (TripFix)',overview:"TripFix is an travel booking MERN stack application developed using React, NodeJS and MongoDB. User can register and login to the web application using their registered credentials. They can serach for different cities and book a place by providing some booking details such as name, number of members, and booking date. User is able to update one's booking details before 2 weeks of the trip.",github:"https://github.com/ashishsamuel/tripFix-travelwebsite-frontend",livelink:"https://marvelous-yeot-35f061.netlify.app/home",languages:"HTML, CSS, Bootstrap, Material UI, JavaScript, React, NodeJS, Express, MongoDB"},
    {image:'images/meanproject.png',title:'ProBuy Ecommerce Application',overview:"ProBuy is an Ecommerce MEAN application developed using Angular, NodeJS, Express and MongoDB where user can register and login using the registered credentials. User can view products, add and remove products to and from cart and wishlist.  User can proceed for the final checkout from the cart where we used PayPal for performing transactions.",github:"https://github.com/ashishsamuel/proBuy-MEAN-frontend",livelink:"https://probuy-frontend.vercel.app/",languages:"HTML, CSS, Bootstrap, TypeScript, Angular, NodeJS, Express and MongoDB"},
    {image:'images/reactgameapp.png',title:'DiceGame Application',overview:"DiceGame is an web application game developed using React where user has to select a number and throw the dice. If both the numbers in the dice and the number selected becomes the same then user would be able to score points else user would lose existing points. Its a game where one can win only based on luck....",github:"https://github.com/ashishsamuel/Dicegame-app",livelink:"https://dicegame141.netlify.app/",languages:"HTML, CSS, Bootstrap, JavaScript, React"}
  ])

  const [jsProjectList,setjsProjectList] = useState([
    {image:'images/jscalculator.png',title:'Calculator Application',overview:"Calculator application developed using JavaScript that can perform basic arithmetic operations like addition, subtraction, multiplication and division",github:"https://github.com/ashishsamuel/calculator",livelink:"https://calculator141.netlify.app/",languages:"HTML, CSS, Bootstrap, JavaScript"},
    {image:'images/jsweather.png',title:'Weather Prediction Application',overview:"Weather Prediction application developed using JavaScript that displays the country, humidity, wind, pressure of the city provided by the user",github:"https://github.com/ashishsamuel/weatherjsapp",livelink:"https://weathercheck1478.netlify.app/",languages:"HTML, CSS, Bootstrap, JavaScript"},
  ])

  const [reactProjectList,setReactProjectList] = useState([
    {image:'images/netflixreact.png',title:'Netflix Application',overview:"Netflix application developed using React that displays the basic User Interface of the netflix with large collection of films",github:"https://github.com/ashishsamuel/netflix",livelink:"https://netflix-7a546.netlify.app/",languages:"HTML, CSS, Bootstrap, JavaScript, React"},
    {image:'images/reactecommerce.png',title:'Zesco Online Store Application',overview:"Zesco is an Ecommerce application developed using React and Redux where user can view products, add or remove products to and from wishlist and cart, checkout products for purchasing. JSON Server is used as the backend server.",github:"https://github.com/ashishsamuel/zesco-ecommerce-site-react",livelink:"https://zesco.netlify.app/",languages:"HTML, CSS, Bootstrap, JavaScript, React, Redux, JSON Server"},
    {image:'images/firebasedocupapp.png',title:'Document Application (Doc Up)',overview:"DocApp is an web application developed using React and Firebase where user can create, update and remove text documents based on their needs. ReactQuill library is used as the text editor.",github:"https://github.com/ashishsamuel/doc-up-app",livelink:"https://doc-up-app.vercel.app/",languages:"HTML, CSS, Bootstrap, JavaScript, React, Firebase"},
    {image:'images/reactgameapp.png',title:'DiceGame Application',overview:"DiceGame is an web application game developed using React where user has to select a number and throw the dice. If both the numbers in the dice and the number selected becomes the same then user would be able to score points else user would lose existing points. Its a game where one can win only based on luck....",github:"https://github.com/ashishsamuel/Dicegame-app",livelink:"https://dicegame141.netlify.app/",languages:"HTML, CSS, Bootstrap, JavaScript, React"}
  ])

//   const [angularProjectList,setAngularProjectList] = useState([
//     {image:'images/meanproject.png',title:'ProBuy Ecommerce Application',overview:"ProBuy is an Ecommerce MEAN application developed using Angular, NodeJS, Express and MongoDB where user can register and login using the registered credentials. User can view products, add and remove products to and from cart and wishlist.  User can proceed for the final checkout from the cart where we used PayPal for performing transactions.",github:"https://github.com/ashishsamuel/proBuy-MEAN-frontend",livelink:"https://probuy-frontend.vercel.app/",languages:"HTML, CSS, Bootstrap, TypeScript, Angular, NodeJS, Express and MongoDB"},
// ])

  // const [meanProjectList,setMeanProjectList] = useState([
  //   {image:'images/meanproject.png',title:'ProBuy Ecommerce Application',overview:"ProBuy is an Ecommerce MEAN application developed using Angular, NodeJS, Express and MongoDB where user can register and login using the registered credentials. User can view products, add and remove products to and from cart and wishlist.  User can proceed for the final checkout from the cart where we used PayPal for performing transactions.",github:"https://github.com/ashishsamuel/proBuy-MEAN-frontend",livelink:"https://probuy-frontend.vercel.app/",languages:"HTML, CSS, Bootstrap, TypeScript, Angular, NodeJS, Express and MongoDB"},
  // ])

  const [mernProjectList,setMernProjectList] = useState([
    {image:'images/mern.png',title:'Travel Booking Application (TripFix)',overview:"TripFix is an travel booking MERN stack application developed using React, NodeJS and MongoDB. User can register and login to the web application using their registered credentials. They can serach for different cities and book a place by providing some booking details such as name, number of members, and booking date. User is able to update one's booking details before 2 weeks of the trip.",github:"https://github.com/ashishsamuel/tripFix-travelwebsite-frontend",livelink:"https://marvelous-yeot-35f061.netlify.app/home",languages:"HTML, CSS, Bootstrap, Material UI, JavaScript, React, NodeJS, Express, MongoDB"},
  ])
  console.log(projectList);

  const openPopup = (project)=>{
    console.log(project);
    setModalData(project)
    handleShow()

  }

  const projectListSet = (projectTech)=>{
    setProjectActiveCheck(false)
    if(projectTech == "projectAllList"){
      setProjectList(projectAllList)
      setProjectActiveCheck(1)
    }
    else if(projectTech == "jsProjectList"){
      setProjectList(jsProjectList)
      setProjectActiveCheck(2)
    }
    // else if(projectTech == "angularProjectList"){
    //   setProjectList(angularProjectList)
    //   setProjectActiveCheck(3)
    // }
    else if(projectTech == "reactProjectList"){
      setProjectList(reactProjectList)
      setProjectActiveCheck(4)
    }
    else if(projectTech == "mernProjectList"){
      setProjectList(mernProjectList)
      setProjectActiveCheck(5)
    }
    // else{
    //   setProjectList(meanProjectList)
    //   setProjectActiveCheck(6)
    // }

  }

  return (
    <section className='projects-section' id='projects'>
      <div className='my-2 section-title'>
        <h2 className='text-dark fw-bold'>Projects</h2>
        <p style={{fontStyle:'italic',fontWeight:'bold'}}>Browse recent works</p>

        <ul className='d-flex mt-5 list-style flex-wrap'>
          <li className={projectActiveCheck ==1?"project-content project-active mx-3 my-4":
    "project-content mx-3 my-4"} onClick={()=>projectListSet("projectAllList")}>All</li>
          <li className={projectActiveCheck ==2?"project-content project-active mx-3 my-4":
    "project-content mx-3 my-4"} onClick={()=>projectListSet("jsProjectList")}>JavaScript</li>
          {/* <li className={projectActiveCheck ==3?"project-content project-active mx-3 my-4":
    "project-content mx-3 my-4"} onClick={()=>projectListSet("angularProjectList")}>Angular</li> */}
          <li className={projectActiveCheck ==4?"project-content project-active mx-3 my-4":
    "project-content mx-3 my-4"} onClick={()=>projectListSet("reactProjectList")}>React</li>
          <li className={projectActiveCheck ==5?"project-content project-active mx-3 my-4":
    "project-content mx-3 my-4"}  onClick={()=>projectListSet("mernProjectList")}>MERN Stack</li>
          {/* <li className={projectActiveCheck ==6?"project-content project-active mx-3 my-4":
    "project-content mx-3 my-4"}  onClick={()=>projectListSet("meanProjectList")}>MEAN Stack</li> */}
        </ul>
      </div>
      
        
      
      <div className="container">

      <Row className='justify-content-center'>
        {projectList.length>0? projectList.map(project=>(
          <Col lg={4} md={6} sm={12} className='my-3' data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="2000">
            <div className='shadow project-col'>
              <img className='projectImage img-fuild shadow' src={project.image} alt="js age calculator" />
              <div className='px-4'>
                <h3 className='my-3 project-name'>{project.title}</h3>
                <button onClick={()=>openPopup(project)} className='btn btn-dark shadow d-flex align-items-center viewbtn'>View More <i class="uil uil-arrow-right ms-2 fa-2x"></i></button>
              </div>
            </div>
            
          </Col>
          )):<Col>No projects</Col>
}
      </Row>

      <Modal size='lg' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='text-info fw-bolder fs-5'>{modalData.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Row>
                <Col md={6} sm={12} lg={6}>
                    <img src={modalData.image} alt="project image" className='img-fluid' style={{height:'235px'}}/>
                </Col>
                <Col md={6} sm={12} lg={6}>
                  <p className='fw-bolder text-info fs-5'>Project Overview : <span className='font-italic text-dark' style={{fontSize:'12px'}}>{modalData.overview}</span>
                  </p>
                  <p className='fw-bolder text-info fs-5'>Languages used : <span className='fw-bolder text-dark' style={{fontSize:'12px'}}>{modalData.languages}</span></p>
                </Col>
            </Row>
            <div className="mt-3">
                <a href={modalData.github} target='_blank' className='me-3 btn text-dark'><i class="fa-brands fa-github fa-2x"></i></a>
                <a href={modalData.livelink} target='_blank' className='me-5 btn text-dark'><i class="fa-solid fa-link fa-2x"></i></a>
            </div>
        </Modal.Body>
      </Modal>
      
      </div>
    </section>
  )
}

export default Projects
