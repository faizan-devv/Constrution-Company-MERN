import React, {Fragment} from 'react'
import MetaData from '../layout/MetaData'
import Sidebar from './Sidebar'
import { Link } from 'react-router-dom'
const CouponList = () => {
    return (
        <Fragment>
        <MetaData title={'New Product'} />
        <div className="row">
            <div className="col-12 col-md-2">
                <Sidebar />
            </div>
    
            <div className="col-12 col-md-10" >
                <Fragment>
                <h1 className="my-5">All Couponss</h1>
                <div id="example_wrapper" className="dataTables_wrapper my-5"><div className="dataTables_length" id="example_length"><label>Show <select name="example_length" aria-controls="example" className><option value={10}>10</option><option value={25}>25</option><option value={50}>50</option><option value={100}>100</option></select> entries</label></div><div id="example_filter" className="dataTables_filter"><label>Search:<input type="search" className placeholder aria-controls="example" /></label></div><table id="example" className="display dataTable" style={{width: '100%'}} aria-describedby="example_info">
        
    
    
                <table class="table">
         <thead>
             <tr>
              <th>Coupon ID</th>
              <th>Name</th>
              <th>Discount %</th>
              <th>Expiry Date</th>
              <th>Action</th>
             </tr>
         </thead>
         <tbody>
               <tr>
                     <td data-label="S.No">1</td>
                     <td data-label="Name">Noorullah</td>
                     <td data-label="Age">20%</td>
                     <td data-label="Marks%">3 March 2022</td>
                 <td data-label="Staus">  <i className="fa fa-trash"></i> </td>
               </tr>
    
               <tr>
                     <td data-label="S.No">2</td>
                     <td data-label="Name">Ali</td>
                     <td data-label="Age">10%</td>
                     <td data-label="Marks%">7 April 2022</td>
                     <td data-label="Staus">   <i className="fa fa-trash"></i></td>
               </tr>
    
               
         </tbody>
       </table>
      </table><div className="dataTables_info" id="example_info" role="status" aria-live="polite">Showing 1 to 10 of 57 entries</div>
      </div>
    
                </Fragment>
            </div>
        </div>
    
    </Fragment>
    )
}


export default CouponList