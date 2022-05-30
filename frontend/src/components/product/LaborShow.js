import React from 'react';
import { Link } from 'react-router-dom'

const LaborShow = () => {
  return (
    <>
    
    <h1 id="products_heading" className="my-5">Labor</h1>
<section className="section service-2">
<div className="container">
<div className="row">
  <div className="col-lg-4 col-md-6 col-sm-6">
    <div className="service-block mb-5">
      <img src="images/4labor.jpg" alt className="img-fluid" />
      <div className="card-body d-flex flex-column">
      <h5 className="card-title">
        <Link to="">Painter</Link>
      </h5>
      <div className="ratings mt-auto">
        <div className="rating-outer">
          <div className="rating-inner"></div>
        </div>
        <span id="no_of_reviews">(5 Reviews)</span>
      </div>
      <p className="card-text">Rs 1300.67 per hours</p>
      <Link to="/productdetails" id="view_btn" className="btn btn-block ">View Details</Link>
    </div>
    </div>
  </div>
  <div className="col-lg-4 col-md-6 col-sm-6">
    <div className="service-block mb-5">
      <img src="images/2labor.jpg" alt className="img-fluid" />
      <div className="card-body d-flex flex-column">
      <h5 className="card-title">
      
      <Link href=""
          >Electration</Link>
      </h5>
      <div className="ratings mt-auto">
       <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star-half-o"></i>
        <i className="fa fa-star-o"></i>
        <span id="no_of_reviews">(15 Reviews)</span>
      </div>
      <p className="card-text">Rs 965 per hours</p>
      <a href="#" id="view_btn" className="btn btn-block">View Details</a>
    </div>
    </div>
  </div>
  <div className="col-lg-4 col-md-6 col-sm-6">
    <div className="service-block mb-5">
      <img src="images/civil1.jpg" alt className="img-fluid" />
      <div className="card-body d-flex flex-column">
      <h5 className="card-title">
        <Link href=""
          >Civil Engineer</Link>
      </h5>
      <div className="ratings mt-auto">
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star-half-o"></i>
        <i className="fa fa-star-o"></i>
        <span id="no_of_reviews">(5 Reviews)</span>
      </div>
      <p className="card-text">Rs 725.57 per hours</p>
      <Link href="#" id="view_btn" className="btn btn-block">View Details</Link>
    </div>
    </div>
  </div>
  <div className="col-lg-4 col-md-6 col-sm-6">
    <div className="service-block mb-5 mb-lg-0">
      <img src="images/plumber1.jpg" alt className="img-fluid" />
      <div className="card-body d-flex flex-column">
      <h5 className="card-title">
        <Link href="">Plumber</Link>
      </h5>
      <div className="ratings mt-auto">
       <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star-half-o"></i>
        <i className="fa fa-star-o"></i>
        <span id="no_of_reviews">(5 Reviews)</span>
      </div>
      <p className="card-text">Rs 975.56 per hours</p>

      <Link type="button" href="#" id="view_btn" className="btn btn-block">View Details</Link>
    </div>
    </div>
  </div>
  <div className="col-lg-4 col-md-6 col-sm-6">
    <div className="service-block mb-5 mb-lg-0">
      <img src="images/tiles1.jpg" alt className="img-fluid" />
      <div className="card-body d-flex flex-column">
      <h5 className="card-title">
        <Link href="">Norma labor</Link>
      </h5>
      <div className="ratings mt-auto">
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star-half-o"></i>
        <i className="fa fa-star-o"></i>
        <span id="no_of_reviews">(5 Reviews)</span>
      </div>
      <p className="card-text">RS 75.56 per hours</p>
      <Link href="#" id="view_btn" className="btn btn-block">View Details</Link>
    </div>
    </div>
  </div>
  <div className="col-lg-4 col-md-6 col-sm-6">
    <div className="service-block mb-5 mb-lg-0">
      <img src="images/driver1.jpg" alt className="img-fluid" />
      <div className="card-body d-flex flex-column">
      <h5 className="card-title">
        <Link href="">Driver</Link>
      </h5>
      <div className="ratings mt-auto">
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star-half-o"></i>
        <i className="fa fa-star-o"></i>
        <span id="no_of_reviews">(5 Reviews)</span>
      </div>
      <p className="card-text">RS 75.56 per hours</p>
      <Link href="#" id="view_btn" className="btn btn-block">View Details</Link>
    </div>
    </div>
  </div>
</div>
</div>
</section>

   
   </> 
   
   
)
};

export default LaborShow;
