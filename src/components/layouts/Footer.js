import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>

<footer class="text-center text-lg-start text-muted footer">
        
        <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
         
            <div class="me-5 d-none d-lg-block">
                <span class="text-white">Get connected with us on social networks:</span>
            </div>
          
            <div>
                <Link href="" class="me-4 link-info">
                    <i class="fab fa-facebook-f"></i>
                </Link>
               <Link href="" class="me-4 link-info">
                    <i class="fab fa-twitter"></i>
            </Link>
               <Link href="" class="me-4 link-info">
                    <i class="fab fa-google"></i>
            </Link>
               <Link href="" class="me-4 link-info">
                    <i class="fab fa-instagram"></i>
            </Link>
               <Link href="" class="me-4 link-info">
                    <i class="fab fa-linkedin"></i>
            </Link>
               <Link href="" class="me-4 link-info">
                    <i class="fab fa-github"></i>
            </Link>
            </div>
           
        </section>
        
        <section class="">
            <div class="container text-center text-md-start mt-5">
                
                <div class="row mt-3">
                    
                    <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                      
                        <h6 class="text-uppercase fw-bold mb-4 text-white">
                            <i class="fas fa-gem me-3 text-info"></i>Online Learning
                        </h6>
                        <p class="text-white">
                            Here you can use rows and columns to organize your footer content. Lorem ipsum
                            dolor sit amet, consectetur adipisicing elit.
                        </p>
                    </div>
                    

                    <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                        <h6 class="text-uppercase fw-bold mb-4 text-white">
                            Other Courses
                        </h6>
                        <p class="text-white">
                           <Link class="text-reset">Angular</Link>
                        </p>
                        <p class="text-white">
                           <Link class="text-reset ">React</Link>
                        </p>
                        <p class="text-white">
                           <Link class="text-reset">Vue</Link>
                        </p>
                        <p class="text-white">
                           <Link class="text-reset ">Laravel</Link>
                        </p>
                    </div>
                  
                    <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                     
                        <h6 class="text-uppercase fw-bold mb-4 text-white">
                            Useful links
                        </h6>
                        <p class="text-white">
                           <Link href="#" class="text-reset ">About</Link>
                        </p>
                        <p class="text-white">
                           <Link href="#!" class="text-reset ">Course</Link>
                        </p>
                        <p class="text-white">
                           <Link href="#!" class="text-reset ">Instructor</Link>
                        </p>
                        <p class="text-white">
                           <Link href="#!" class="text-reset ">Contact</Link>
                        </p>
                    </div>
                    
                    <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                       
                        <h6 class="text-uppercase fw-bold mb-4 text-white">Contact</h6>
                        <p class="text-white"><i class="fas fa-home me-3 text-info"></i>Hazira,Gwalior</p>
                        <p class="text-white">
                            <i class="fas fa-envelope me-3 text-info"></i>
                            vibhuvishal80@gmail.com
                        </p>
                        <p class="text-white"><i class="fas fa-phone me-3 text-info"></i> +916266339138</p>
                        <p class="text-white"><i class="fas fa-print me-3 text-info"></i> +916266339138</p>
                    </div>
            
                </div>
              
            </div>
        </section>
        

       
        <div class="text-center p-4 text-white" >
            © 2021 Copyright:
           <Link class="text-reset fw-bold text-white" to="">Vishal Bhagat</Link>
        </div>
 
    </footer>
    
    </>
  )
}

export default Footer