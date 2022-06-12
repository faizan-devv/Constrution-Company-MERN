
 import React from 'react'
 import { Link } from 'react-router-dom'
 
 const Video = () => {
     
     return (
         <div className={`col-sm-12 col-md-6 col-lg-3 my-3`}>
             <div className="card p-3 rounded">
                
    
                       {/* <video 
                     controls>
                                    <source src={video.clips[0].url} key={clip} type="video/mp4" /> 
                                    </video> 
               
                 <div className="card-body d-flex flex-column">
                     <h5 className="card-title">
                         <Link to={`/video/${video._id}`}>{video.name}</Link>
                     </h5>
                     <div className="ratings mt-auto">
                         <div className="rating-outer">
                             <div className="rating-inner" style={{ width: `${(video.ratings / 5) * 100}%` }}></div>
                         </div>
                         <span id="no_of_reviews">({video.numOfReviews} Reviews)</span>
                     </div>
                     <p className="card-text">{video.numOfDays}</p>
                     <Link to={`/video/${video._id}`} id="view_btn" className="btn btn-block">View Details</Link>
                 </div> */}
             </div>
         </div>
     )
 }
 
 export default Video;
 
//    //  className="card-img-top mx-auto"
                    //  src={video.clips[0].url}
  //src="https://m.media-amazon.com/images/I/617NtexaW2L._AC_UY218_.jpg"
 