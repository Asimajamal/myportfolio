import React from 'react'
import './Footer.css';

const Footer = () => {
  return (
    <div>
      {/* <!-- Footer --> */}
     
    <footer className='bg bg-dark fixed-bottom'>
        <div className="container " style={{padding: "25px",textAlign:"center"}}>
            
            <a href="https://www.behance.net/asimajamal789" rel="noreferrer"  target="_blank">
                    <i className="fa fa-behance fa-lg white-text mr-md-5 mr-3 fa-2x"></i>
                </a>
                <a href="https://github.com/AsimaJamal789/" rel="noreferrer"  target="_blank">
                        <i className="fa fa-github fa-lg white-text mr-md-5 mr-3 fa-2x"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/asima-jamal-4b09441b8/"rel="noreferrer"  target="_blank" >
                            <i className="fa fa-linkedin fa-lg white-text mr-md-5 mr-3 fa-2x"></i>
                        </a>
                        <a href="https://wa.me/3416015071" rel="noreferrer"  target="_blank">
                                <i className="fa fa-whatsapp fa-lg white-text mr-md-5 mr-3 fa-2x"></i>
                            </a>
                        <a href="https://asimajamal789@gmail.com" rel="noreferrer"  target="_blank">
                                <i className="fa fa-envelope fa-lg white-text mr-md-5 mr-3 fa-2x"></i>
                        </a>   
        </div>
        <div>
            <p  className="text-warning mt-2" style={{textAlign:"center" }}>
                &copy; 2022 Copyright
            </p>
        </div>
    </footer>


      
    </div>
  )
}

export default Footer
