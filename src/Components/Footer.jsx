import React from 'react'
import './footer.css'

function Footer() {
  return (
    <div className='container text-center mt-5'>
        <h5 className='text-dark fw-bold' style={{fontStyle:'italic'}}>चौ. प्रिंस त्यागी★</h5>
        <div className='d-flex justify-content-center mt-5'>
            <a className='fw-bold mx-3 text-dark' href='#about' style={{textDecoration:'none'}}>About</a>
            <a className='fw-bold mx-3 text-dark' href='#projects' style={{textDecoration:'none'}}>Projects</a>
            <a className='fw-bold mx-3 text-dark' href='#skills' style={{textDecoration:'none'}}>Skills</a>

        </div>
        <div className='d-flex justify-content-center mt-4'>
            {/* <a className='fw-bold mx-3 fs-5 rounded border px-2 py-1 bg-dark text-light' href='/' target='_blank'><i class="uil uil-facebook"></i></a> */}
            <a href='https://github.com/PrinceTyagi07' className='text-dark my-3' target='_blank'><i class="uil uil-github-alt fa-2x"></i></a>
                    
            <a className='fw-bold mx-3 fs-5 rounded border px-2 py-1 bg-dark text-light' href='https://www.instagram.com/prince_tyagi._.07/' target='_blank'><i class="uil uil-instagram-alt"></i></a>
            <a className='fw-bold mx-3 fs-5 rounded border px-2 py-1 bg-dark text-light'  href='https://www.linkedin.com/in/prince-tyagi-40248325a/' target='_blank'><i class="uil uil-linkedin"></i></a>

        </div>

        <p className='d-flex justify-content-center mt-3'>Copyright © 2023 Portfolio. Built with React.</p>
        
    </div>
  )
}

export default Footer
