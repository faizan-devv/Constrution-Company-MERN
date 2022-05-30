import React from 'react'
import { Link } from 'react-router-dom'



const VehicleShow = () => {
  return (
    <>
    
    <h1 id="products_heading" className="my-5">Vehicle</h1>
<section className="section service-2">
<div className="container">
<div className="row">
  <div className="col-lg-4 col-md-6 col-sm-6">
    <div className="service-block mb-5">
      <img src="images/1vehicle.jpg" alt className="img-fluid" />
      <div className="card-body d-flex flex-column">
      <h5 className="card-title">
        <Link to="">Crane</Link>
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
      <img src="images/2vehicle.jpg" alt className="img-fluid" />
      <div className="card-body d-flex flex-column">
      <h5 className="card-title">
      
      <Link href=""
          >truck</Link>
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
      <img src="images/3vehicle.jpg" alt className="img-fluid" />
      <div className="card-body d-flex flex-column">
      <h5 className="card-title">
        <Link href=""
          >water tank</Link>
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
      <img src="images/2vehicle.jpg" alt className="img-fluid" />
      <div className="card-body d-flex flex-column">
      <h5 className="card-title">
        <Link href="">truck</Link>
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
      <img src="images/3vehicle.jpg" alt className="img-fluid" />
      <div className="card-body d-flex flex-column">
      <h5 className="card-title">
        <Link href="">water tank</Link>
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
      <img src="images/1vehicle.jpg" alt className="img-fluid" />
      <div className="card-body d-flex flex-column">
      <h5 className="card-title">
        <Link href="">crane</Link>
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
}

export default VehicleShow