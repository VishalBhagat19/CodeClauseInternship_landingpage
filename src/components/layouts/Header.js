import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
        <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0" >
            <Link to=""
            classNameName="navbar-brand d-flex align-items-center px-4 px-lg-5">
            <h2 className="m-0 text-info">
                <img src="https://dynamic.brandcrowd.com/asset/logo/ea15496a-7783-4baa-8da2-7794c6399f53/logo-search-grid-1x?logoTemplateVersion=1&v=637568146174000000&text=Study+hub&colorpalette=blue" height="82px" width="150" alt="logo"/></h2>
        </Link>
        <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"
            fdprocessedid="scxh8"><span className="navbar-toggler-icon"></span></button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto p-4 p-lg-0">
                <a href="#home" className="nav-item nav-link active">Home</a>
                <a href="#about" className="nav-item nav-link">About</a>
                <a href="#course" className="nav-item nav-link">Courses</a>
                <a href="#Instructor" className="nav-item nav-link">Instructor</a>
                <a href="#contact" className="nav-item nav-link">Contact</a>
            </div>
            <Link className="btn btn-info py-4 px-lg-5 d-none d-lg-block" data-bs-toggle="modal"
                data-bs-target="#join">Community<i className="fa fa-arrow-right ms-3"></i></Link>
        </div>
    </nav>

  
    <div class="modal fade" id="join" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Join Now</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">

                    <form method="post" action="" enctype="multipart/form-data">
                        <div class="form-group form-row">
                            <label class="col-md-3 required">Name</label>
                            <div class="col-md-9">
                                <input type="text" class="form-control" name="Name"
                                    placeholder="please enter your name"/>
                            </div>
                        </div>
                        <div class="form-group form-row">
                            <label class="col-md-3 required">Email</label>
                            <div class="col-md-9">
                                <input type="email" class="form-control" name="email"
                                    placeholder="please enter your email"/>
                            </div>
                        </div>
                        <div class="form-group form-row">
                            <label class="col-md-3 required">Phone</label>
                            <div class="col-md-9">
                                <input type="number" class="form-control" name="phone"
                                    placeholder="please enter phone number"/>
                            </div>
                        </div>
                        <div class="form-group form-row">
                            <label class="col-md-3"></label>
                            <div class="col-md-9">
                                <button type="submit" class="btn btn-info">Join</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>           
    </div>
    </>
  )
}

export default Header